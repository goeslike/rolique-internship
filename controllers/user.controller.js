const { passwordHasher } = require('../helpers');
const { fileService, userService } = require('../services');
const { statusCode } = require('../constants');
const { normalizer } = require('../helpers');
const { statusCodesEnum } = require('../constants');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {
                photos: [avatar],
                body: {
                    password,
                }
            } = req;

            const hashedPassword = await passwordHasher.hash(password);
            const newUser = await userService.createUser({
                ...req.body,
                password: hashedPassword
            });

            const { _id } = newUser;

            if (avatar) {
                const {
                    finalPath,
                    filePath
                } = await fileService.createFileDir('users', avatar.name, _id, 'photos');

                await avatar.mv(finalPath);
                await userService.updateUser({ _id }, { avatar: filePath, avatars: filePath });
            }

            res.status(statusCode.OK).json(newUser);

            next();
        } catch (error) {
            next(error);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const { role } = req.userId;
            const findUsers = await userService.findAll(req.query);
            const users = await normalizer(findUsers);

            if (role !== 'admin') {
                const allowedUsers = users.filter((user) => user.role !== 'admin');
                return res.json(allowedUsers);
            }

            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { params: { id }, body, body: { password } } = req;

            if (password) {
                const hashedPassword = await passwordHasher.hash(password);
                await userService.updateOne(id, { ...body, password: hashedPassword });
            }

            await userService.updateOne(id, { ...body });

            res.status(statusCodesEnum.OK).json(`user id:${id} is updated`);
        } catch (error) {
            next(error);
        }
    },

    getUserById: (req, res) => {
        const { user } = req;

        res.status(statusCode.OK).json(user);
    },
};
