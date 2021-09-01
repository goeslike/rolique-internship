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
                avatar,
                body: {
                    password,
                }
            } = req;

            if (!avatar) {
                req.body.avatar = EMPTY_AVATAR_URL;
            }

            const hashedPassword = await passwordHasher.hash(password);

            if (avatar) {
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, USER);
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

    getUserById: (req, res) => {
        const { user } = req;

        res.json(user);
    },

    updateUser: async (req, res, next) => {
        try {
            const {
                params: { id },
                body: { password },
                avatar
            } = req;
            const checkUser = await userService.findOneByParams({ _id: id });

            if (!avatar) {
                req.body.avatar = checkUser.avatar;
            }

            if (password) {
                req.body.password = await passwordHasher.hash(password);
            }

            if (avatar) {
                if (checkUser.avatar) {
                    await fileService.deleteFile(checkUser.avatar, USER_DELETE);
                }
                const cloudResponse = await fileService.uploadFile(avatar.tempFilePath, USER);
                req.body.avatar = cloudResponse.url;
            }

            await userService.updateOne(id, { ...req.body });

            res.status(statusCode.OK)
                .json(USER_IS_UPDATED);
        } catch (error) {
            next(error);
        }
    }
};
