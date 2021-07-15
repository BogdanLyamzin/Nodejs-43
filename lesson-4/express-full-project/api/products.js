const express = require("express");

// const {validateProduct} = require("../middlewares");
const {validateProduct} = require("../validateSchemas");
const {validateMiddleware} = require("../middlewares");
const {products: ctrl} = require("../controllers");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

// router.post("/", express.json(), validateProduct, ctrl.add);
router.post("/", express.json(), validateMiddleware(validateProduct), ctrl.add);
router.put("/:id", express.json(), ctrl.update);

router.patch("/:id", express.json(), ctrl.updateStatus);

router.delete("/:id", ctrl.del);

module.exports = router;

