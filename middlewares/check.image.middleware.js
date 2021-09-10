const { BAD_REQUEST } = require('../constants/response.status.enum');
const {
    IMAGES_MIMETYPES,
    IMAGES_MAX_SIZE
} = require('../constants/mime.types.enum');
const {
    ErrorHandler,
    errorMassages: {
        AVATAR_ERROR,
        LARGE_FILE_SIZE,
        WRONG_FILE_FORMAT
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

            if (filesData.length > 1) {
                throw new ErrorHandler(BAD_REQUEST, AVATAR_ERROR.massages);
            }

            const {
                name,
                size,
                mimetype
            } = filesData[0];

            if (!IMAGES_MIMETYPES.includes(mimetype)) {
                throw new ErrorHandler(BAD_REQUEST, WRONG_FILE_FORMAT.message);
            }

            if (size > IMAGES_MAX_SIZE) {
                throw new ErrorHandler(BAD_REQUEST, LARGE_FILE_SIZE.message(name));
            }

            next();
        } catch (error) {
            next(error);
        }
    }
};
