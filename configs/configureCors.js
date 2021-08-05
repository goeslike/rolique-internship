// const { ALLOWED_ORIGIN } = require('./config');
// const { ErrorHandler, errorMassages: { CORS_NOT_ALLOWED } } = require('../errors');
// const { FORBIDDEN } = require('../constants/response.status.enum');

// const configureCors = (origin, callback) => {
//     const whiteList = ALLOWED_ORIGIN.split(';');
//
//     if (!origin) { // FOR postman
//         return callback(null, true);
//     }
//
//     if (!whiteList.includes(origin)) {
//         return callback(new ErrorHandler(FORBIDDEN, CORS_NOT_ALLOWED), false);
//     }
//
//     return callback(null, true);
// };
// module.exports = configureCors;
// const configureCors = async (origin) => {
//     try {
//         const whiteList = ALLOWED_ORIGIN.split(';');
//
//         // if (!origin) return true; // FOR postman
//
//         if (!whiteList.includes(origin)) {
//             console.log('error');
//             await new ErrorHandler(FORBIDDEN, CORS_NOT_ALLOWED);
//         }
//
//         console.log('success');
//         return true;
//     } catch (e) {
//         console.log(e);
//     }
// };
// module.exports = configureCors;
