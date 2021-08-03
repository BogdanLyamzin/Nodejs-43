const express = require("express");

const {filesMiddleware} = require("../middlewares");
const {users: ctrl} = require("../controllers");

const router = express.Router();

router.post("/", ctrl.add);

router.put("/:id", filesMiddleware.single("avatar"), ctrl.update);
router.put("/:id", filesMiddleware.array("photos", 12), ctrl.update);
const userFiles = [
    {
        name: "avatar", 
        maxCount: 1
    },
    {
        name: "photos",
        maxCount: 12
    }
];
router.put("/:id", filesMiddleware.fields(userFiles), ctrl.update);
module.exports = router;