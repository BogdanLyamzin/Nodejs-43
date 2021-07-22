const express = require("express");

const {authors: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.post("/", express.json(), ctrl.add);

module.exports = router;