/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 4/06/2025 19:17:08
  -------------------------------
  Modificado:
  Motivo: Tabla empresa
*/
const EmpresaService = require("../service/empresa");

const EmpresaController = {
    async empresa_sellst  (req, res)  {
      try {
        const empresas = await EmpresaService.empresa_sellst();
        res.json( empresas);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async empresa_ins  (req, res) {
      try {
        const empresa = await EmpresaService.empresa_ins(req.body);
        res.json( empresa);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async empresa_sel  (req, res)  {
      try {
        const empresa = await EmpresaService.empresa_sel(req.params.id);
        res.json( empresa);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async empresa_upd  (req, res)  {
      try {
        const empresa = await EmpresaService.empresa_upd(req.params.id, req.body);
        res.json( empresa);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async empresa_del  (req, res)  {
      try {
        const empresa = await EmpresaService.empresa_del(req.params.id);
        res.json( empresa);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    async empresa_correlativo  (req, res)  {
      try {
        const empresa = await EmpresaService.empresa_correlativo(req.params.id);
        res.json( empresa);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    }
};
module.exports = EmpresaController;
