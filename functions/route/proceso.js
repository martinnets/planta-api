/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 23:06:54
  -------------------------------
  Modificado:
  Motivo: 
*/
const express = require("express");
const router = express.Router();
const Controller = require("../controller/proceso");

router.get("/proceso/:inicio/:fin/:usuario",  Controller.getProceso);
router.get("/ingreso/:inicio/:fin/:usuario",  Controller.getIngreso);
router.get("/detalle/:id",  Controller.getIngresoDetalle);
router.get("/precio/:id",  Controller.getPrecio);
router.get("/:id",  Controller.getOne);
router.post("/",  Controller.create);
router.delete("/:id",  Controller.remove);
router.put("/:id",  Controller.update);

module.exports = router;

