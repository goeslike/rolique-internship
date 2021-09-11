const { EMPTY_AVATAR_URL } = require('../configs/config');
const {
    fileService,
    userService
} = require('../services');
const {
    FOLDER_NAME: { USER },
    FOLDER_ASSETS: { USER_DELETE },
    USER_IS_CREATED,
    USER_IS_UPDATED
} = require('../constants/constants');
const { passwordHasher } = require('../helpers');
const { statusCode } = require('../constants');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {
                body: {
                    password,
                },
                files
            } = req;

            if (!files) {
                req.body.avatar = EMPTY_AVATAR_URL;
            }

            const hashedPassword = await passwordHasher.hash(password);

            if (files) {
                const avatar = Object.values(req.files);
                const cloudResponse = await fileService.uploadFile(avatar[0].tempFilePath, USER);
                req.body.avatar = cloudResponse.url;
            }

            await userService.createUser({
                ...req.body,
                password: hashedPassword
            });

            res.status(statusCode.OK)
                .json(USER_IS_CREATED);

            next();
        } catch (error) {
            next(error);
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = await userService.findAll(req.query);

            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    getUserById: async (req, res) => {
        const user = await userService.findOneByParams({ _id: req.params.id });

        res.json(user);
    },

    updateUser: async (req, res, next) => {
        try {
            const {
                params: { id },
                body: { password },
                files
            } = req;

            const checkUser = await userService.findOneByParams({ _id: id });

            if (!files) {
                req.body.avatar = checkUser.avatar;
            }

            if (files) {
                if (checkUser.avatar) {
                    await fileService.deleteFile(checkUser.avatar, USER_DELETE);
                }
                const avatar = Object.values(req.files);
                const cloudResponse = await fileService.uploadFile(avatar[0].tempFilePath, USER);
                req.body.avatar = cloudResponse.url;
            }

            if (password) {
                req.body.password = await passwordHasher.hash(password);

            }

            await userService.updateOne(id, { ...req.body });

            res.status(statusCode.OK)
                .json(USER_IS_UPDATED);
        } catch (error) {
            next(error);
        }
    }
};
