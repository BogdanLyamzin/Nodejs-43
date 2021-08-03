const fs = require("fs").promises;
const path = require("path");

const {users: service} = require("../../services");

const usersDir = path.join(process.cwd(), "../../upload/users");

const update = async(req, res, next) => {
    try {
        const {id} = req.params;
        const {filename, path: tempPath} = req.file;
        if(tempPath) {
            await fs.mkdir(`${usersDir}/id`);
            const filePath = path.join(usersDir, id, filename);
            await fs.rename(tempPath, filePath);
            req.body.avatar = filePath;
        }
        const result = await service.update(id, req.body);
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = update;