const cloudinary = require('cloudinary').v2;
const DatauriParser = require('datauri/parser');

const parser = new DatauriParser();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY_CLOUD,
    api_secret: process.env.API_SECRET_CLOUD
});


module.exports = {
    uploadFile: (file, folder) => cloudinary.uploader.upload(file, { folder }),

    uploadBinaryFile: async (file, folder) => {
        const mimetype = file.type;

        const binaryText = await file.arrayBuffer();
        const buffer = await Buffer.from(binaryText);

        const image = parser.format(mimetype, buffer);

        return cloudinary.uploader.upload(image.content, { folder });
    },

    deleteFile: async (filePath, folderAsset) => {
        const pathArray = filePath.split('.')
            .slice(-2, -1)[0];
        const arr = pathArray.split('/');
        arr.reverse();
        await cloudinary.uploader.destroy(`${folderAsset}${arr[0]}`);
    }
};
