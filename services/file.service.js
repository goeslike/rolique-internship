const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v1;
const { promisify } = require('util');

const mkdirPromise = promisify(fs.mkdir);

module.exports = {
    createFileDir: async (dirName, fileName, itemId, fileType) => {
        const pathWithoutStatic = path.join(dirName, itemId.toString(), fileType);
        const fileDirectory = path.join(process.cwd(), 'static', pathWithoutStatic);

        const fileExtension = fileName.split('.').pop();
        const newFileName = `${uuid()}.${fileExtension}`;

        const finalPath = path.join(fileDirectory, newFileName);

        await mkdirPromise(fileDirectory, { recursive: true });

        return {
            finalPath,
            filePath: path.join(pathWithoutStatic, newFileName)
        };
    }
};
