const { normalizer, passwordHasher } = require('../helpers');
const { fileService, userService } = require('../services');
const { statusCode } = require('../constants');
const { constants: { FOLDER_NAME: { USER } } } = require('../constants');

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
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, USER);
                await userService.updateOne({ _id }, { avatar: cloudResponse.url });
            }

            res.status(statusCode.OK).json(newUser);

            next();
        } catch (error) {
            next(error);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const findUsers = await userService.findAll(req.query);
            const users = await normalizer(findUsers);

            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.findOneByParams({ _id: id });

            res.json(user);
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

            res.status(statusCode.OK).json(`user id:${id} is updated`);
        } catch (error) {
            next(error);
        }
    }
};
