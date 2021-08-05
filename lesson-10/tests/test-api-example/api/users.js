const express = require("express");

const router = express.Router();

const users = [
    {
        _id: "gsdfs",
        name: "User 1"
    },
    {
        _id: "gsdvfs",
        name: "User 2"
    },
]

router.get("/", async(req, res, next)=> {
    res.json({
        status: "success",
        code: 200,
        data: {
            result: users
        }
    })
});

module.exports = router;