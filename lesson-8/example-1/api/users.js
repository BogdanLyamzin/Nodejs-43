const express = require("express");

const {jwtAuthenticate} = require("../middlewares");
const {users: ctrl} = require("../controllers");

const router = express.Router();

router.get("/profile", jwtAuthenticate, ctrl.getProfile);

module.exports = router;