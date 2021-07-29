const express = require("express");

const {jwtAuthenticate} = require("../middlewares");
const {auth: ctrl} = require("../controllers");

const router = express.Router();

router.post("/register", express.json(), ctrl.register);

router.post("/login", express.json(), ctrl.login);

router.get("/logout", jwtAuthenticate, ctrl.logout);

module.exports = router;