const { BAD_REQUEST } = require('../constants/response.status.enum');
const { IMAGES_MIMETYPES, IMAGES_MAX_SIZE } = require('../constants/mime.types.enum');
const {
    ErrorHandler,
    errorMassages: {
        AVATAR_ERROR,
        LARGE_FILE_SIZE
    }
} = require('../errors');

module.exports = {
    checkImage: (req, res, next) => {
        try {
            const { files } = req;
            if (!files) {
                return next();
            }

            const filesData = Object.values(req.files);
            const images = [];

            for (let i = 0; i < filesData.length; i++) {
                const {
                    name,
                    size,
                    mimetype
                } = filesData[i];

                if (IMAGES_MIMETYPES.includes(mimetype)) {
                    if (size > IMAGES_MAX_SIZE) {
                        throw new ErrorHandler(BAD_REQUEST, LARGE_FILE_SIZE.message(name));
                    }

                    images.push(filesData[i]);
                }
                req.photos = images;

                next();
            }
        } catch (error) {
            next(error);
        }
    },
    checkAvatar: (req, res, next) => {
        try {
            if (!req.photos) {
                return next();
            }

            if (req.photos.length > 1) {
                throw new ErrorHandler(BAD_REQUEST, AVATAR_ERROR.massages);
            }

            const [avatar] = req.photos;
            req.avatar = avatar;

            next();
        } catch (error) {
            next(error);
        }
    }
};
