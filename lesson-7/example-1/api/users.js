const express = require("express");

const {users: ctrl} = require("../controllers");

const router = express.Router();

router.get("/profile", ctrl.getProfile);

module.exports = router;