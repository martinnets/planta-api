const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/usuario");
/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get("/", UsuarioController.getAll);
router.post("/sesion", UsuarioController.getSesion);
router.get("/:id", UsuarioController.getOne);
router.get("/codigo/:id", UsuarioController.getOneCodigo);
router.post("/", UsuarioController.create);
router.delete("/:id", UsuarioController.remove);
router.put("/:id",  UsuarioController.update);
router.post("/login", UsuarioController.login);
router.post("/log", UsuarioController.loginlog);
router.post("/firma", UsuarioController.createfirma);
router.post("/reset", UsuarioController.reset);
router.get("/token/:id", UsuarioController.token);

module.exports = router;
