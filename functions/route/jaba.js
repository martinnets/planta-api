/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 10:41:41
  -------------------------------
  Modificado:
  Motivo: 
*/
const express = require("express");
const router = express.Router();
const Controller = require("../controller/jaba");

router.get("/empresa/:id",  Controller.getAll);
router.get("/:id",  Controller.getOne);
router.post("/",  Controller.create);
router.delete("/:id",  Controller.remove);
router.put("/:id",  Controller.update);

module.exports = router;

