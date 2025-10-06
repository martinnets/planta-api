/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 10:41:41
  -------------------------------
  Modificado:
  Motivo: Tabla jaba
*/
const service = require("../service/jaba");
exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getJaba(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await service.getJabaById(id);
    if (!data) return res.status(404).json({ error: 'No encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    await service.createJaba(req.body);
    res.status(201).json({ message: 'Jaba creado' });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.updateJaba(id, req.body);
    res.json({ message: 'Jaba actualizado' });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.deleteJaba(id);
    res.json({ message: 'Jaba eliminado' });
  } catch (err) {
    next(err);
  }
};
 
