const express = require("express");

const {auth: ctrl} = require("../controllers");
const router = express.Router();

router.post("/register", ctrl.register);

router.get("/confirm", ctrl.confirm);

module.exports = router;