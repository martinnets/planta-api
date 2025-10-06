/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 28/09/2025 12:31:03
  -------------------------------
  Modificado:
  Motivo: 
*/
const express = require("express");
const router = express.Router();
const Controller = require("../controller/medicion");

router.post("/filtro",  Controller.getAll);
router.get("/:id",  Controller.getOne);
router.post("/",  Controller.create);
router.delete("/:id",  Controller.remove);
router.put("/:id",  Controller.update);

module.exports = router;

