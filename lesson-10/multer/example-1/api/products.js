const express = require("express");

const {filesMiddleware} = require("../middlewares");
const {products: ctrl} = require("../controllers");

const router = express.Router();

router.post("/", filesMiddleware.single("image"), ctrl.add);

// router.put("/:id", filesMiddleware.array("gallery", 12), ctrl.update);

// router.put("/:id", filesMiddleware.fields(userFiles), ctrl.update);
module.exports = router;