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
            const files = Object.values(req.files);
            console.log(files);

            const images = [];

            for (let i = 0; i < files.length; i++) {
                const {
                    name,
                    size,
                    mimetype
                } = files[i];

                if (IMAGES_MIMETYPES.includes(mimetype)) {
                    if (size > IMAGES_MAX_SIZE) {
                        throw new ErrorHandler(BAD_REQUEST, LARGE_FILE_SIZE.message(name), LARGE_FILE_SIZE.customCode);
                    }

                    images.push(files[i]);
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
