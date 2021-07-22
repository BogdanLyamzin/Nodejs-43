const express = require("express");

const {books: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/one", ctrl.getOne);

router.get("/:id", ctrl.getById);

router.post("/", express.json(), ctrl.add);

router.put("/:id", express.json(), ctrl.update);

router.delete("/:id", ctrl.del);

module.exports = router;