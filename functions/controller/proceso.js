/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 23:06:54
  -------------------------------
  Modificado:
  Motivo: Tabla proceso
*/
const service = require("../service/proceso");
exports.getIngreso = async (req, res, next) => {
  try {
    const data = await service.getIngreso(req.params.inicio,req.params.fin,req.params.usuario);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getProceso = async (req, res, next) => {
  try {
    const data = await service.getProceso(req.params.inicio,req.params.fin,req.params.usuario);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getIngresoDetalle = async (req, res, next) => {
  try {
    const data = await service.getIngresoDetalle(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getPrecio = async (req, res, next) => {
  try {
    const data = await service.getPrecio(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await service.getProcesoById(id);
    if (!data) return res.status(404).json({ error: 'No encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    await service.createProceso(req.body);
    res.status(201).json({ message: 'Proceso creado' });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.updateProceso(id, req.body);
    res.json({ message: 'Proceso actualizado' });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.deleteProceso(id);
    res.json({ message: 'Proceso eliminado' });
  } catch (err) {
    next(err);
  }
};
 
