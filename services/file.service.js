const cloudinary = require('cloudinary').v2;

const {
    config: {
        CLOUD_NAME,
        API_KEY_CLOUD,
        API_SECRET_CLOUD
    }
} = require('../configs');

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY_CLOUD,
    api_secret: API_SECRET_CLOUD
});

module.exports = {
    uploadFile: (file, folder) => cloudinary.uploader.upload(file, { folder }),

    // createFileDir: async (dirName, fileName, itemId, fileType) => {
    //     const pathWithoutStatic = path.join(dirName, itemId.toString(), fileType);
    //     const fileDirectory = path.join(process.cwd(), 'static', pathWithoutStatic);
    //
    //     const fileExtension = fileName.split('.')
    //         .pop();
    //     const newFileName = `${uuid()}.${fileExtension}`;
    //
    //     const finalPath = path.join(fileDirectory, newFileName);
    //
    //     await mkdirPromise(fileDirectory, { recursive: true });
    //
    //     return {
    //         finalPath,
    //         filePath: path.join(pathWithoutStatic, newFileName)
    //     };
    // }
};
