/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 28/09/2025 12:31:03
  -------------------------------
  Modificado:
  Motivo: Tabla medicion
*/
const service = require("../service/medicion");
exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getdata(req.body);
    console.log(data)
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await service.getdataById(id);
    if (!data) return res.status(404).json({ error: 'No encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    await service.createdata(req.body);
    res.status(201).json({ message: 'Medicion creado' });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.updatedata(id, req.body);
    res.json({ message: 'Medicion actualizado' });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.deletedata(id);
    res.json({ message: 'Medicion eliminado' });
  } catch (err) {
    next(err);
  }
};
 
