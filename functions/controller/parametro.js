/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 4/06/2025 19:23:28
  -------------------------------
  Modificado:
  Motivo: Tabla parametro
*/
const ParametroService = require("../service/parametro");

const ParametroController = {
    async parametro_sellst  (req, res)  {
      try {
        const parametros = await ParametroService.parametro_sellst(req.params.id,req.params.cod);
        res.json( parametros);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async parametro_ins  (req, res) {
      try {
        const parametro = await ParametroService.parametro_ins(req.body);
        res.json( parametro);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async parametro_sel  (req, res)  {
      try {
        const parametro = await ParametroService.parametro_sel(req.params.id);
        res.json( parametro);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async parametro_upd  (req, res)  {
      try {
        const parametro = await ParametroService.parametro_upd(req.params.id, req.body);
        res.json( parametro);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async parametro_del  (req, res)  {
      try {
        const parametro = await ParametroService.parametro_del(req.params.id);
        res.json( parametro);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async parametro_correlativo  (req, res)  {
      try {
        const parametro = await ParametroService.parametro_correlativo(req.params.id);
        res.json( parametro);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
};
module.exports = ParametroController;
