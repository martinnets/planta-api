const service = require('../service/usuario');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getUsuario();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getSesion = async (req, res, next) => {
  try {
    const data = await service.getUsuarioSesion(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = await service.getUsuarioById(id);
    if (!data) return res.status(404).json({ error: 'No encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.getOneCodigo = async (req, res, next) => {
  try {
    const data = await service.getUsuarioCodigo(req.params.id);
    if (!data) return res.status(404).json({ error: 'No encontrado' });
    res.json(data);
  } catch (err) {
    next(err);
  }
};
exports.create = async (req, res, next) => {
  try {
    await service.createUsuario(req.body);
    res.status(201).json({ message: 'Usuario creado' });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.updateUsuario(id, req.body);
    res.json({ message: 'Usuario actualizado' });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await service.deleteUsuario(id);
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    const data = await service.login(req.body);
    res.json({token:data});
    //res.status(201).json({ message: 'Token creado' });
  } catch (err) {
    next(err);
  }
};
exports.loginlog = async (req, res, next) => {
  try {
    const data = await service.loginlog(req.body);
    res.json({token:data});
    //res.status(201).json({ message: 'Token creado' });
  } catch (err) {
    next(err);
  }
};
exports.createfirma = async (req, res, next) => {
  try {
    const data = await service.createfirma(req.body);
    res.json({data});
    //res.status(201).json({ message: 'Token creado' });
  } catch (err) {
    next(err);
  }
};
 
exports.reset = async (req, res, next) => {
  try {
    const data = await service.reset(req.body);
    res.json({token:data});
    //res.status(201).json({ message: 'Token creado' });
  } catch (err) {
    next(err);
  }
};
exports.token = async (req, res, next) => {
  try {
    const data = await service.verify_token(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};