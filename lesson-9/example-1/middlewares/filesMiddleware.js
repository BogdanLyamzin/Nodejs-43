const multer = require("multer");
const path = require("path");

const tempDir = path.join(process.cwd(), "../temp");

const storageConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 3000
    }
});

const uploadMiddleware = multer({
    storage: storageConfig
});

module.exports = uploadMiddleware;