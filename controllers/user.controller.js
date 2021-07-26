const { passwordHasher } = require('../helpers');
const { fileService, userService } = require('../services');
const { statusCode } = require('../constants');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {
                photos: [avatar],
                body: {
                    password,
                }
            } = req;

            // validatorRole.validRole(role);

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
            const users = await userService.getAllUsers({});

            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { params: { userId }, body } = req;

            await userService.updateUser({ userId }, body);

            res.status(statusCode.UPDATED).json(`user id:${userId} updated`);
        } catch (error) {
            next(error);
        }
    },

    getUserById: (req, res) => {
        const { user } = req;

        res.status(statusCode.OK).json(user);
    },
};
