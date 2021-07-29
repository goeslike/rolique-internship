const {
    mimeTypes: {
        IMAGES_MIMETYPES,
        IMAGES_MAX_SIZE
    },
    statusCode: {
        BAD_REQUEST
    }
} = require('../constants');
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
                        throw new ErrorHandler(BAD_REQUEST, LARGE_FILE_SIZE.message(name), LARGE_FILE_SIZE.customCode);
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
                throw new ErrorHandler(BAD_REQUEST, AVATAR_ERROR.massages, AVATAR_ERROR.customCode);
            }

            [req.avatar] = req.photos;

            next();
        } catch (error) {
            next(error);
        }
    }
};
