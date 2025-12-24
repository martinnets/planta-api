/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 23:06:54
  -------------------------------
  Modificado:
  Motivo: 
*/
const ProcesoModel = require("../model/proceso");
const sql = require('mssql');
const config = require('../config/db');

async function getIngreso(inicio,fin,usuario) {
  const pool = await sql.connect(config);
  const result = await pool.request()
       .input('pfecha_inicio', sql.VarChar, inicio)
    .input('pfecha_fin', sql.VarChar, fin)
      .input('pcodigo_usuario', sql.VarChar, usuario)
      .execute('up_ingreso_Sellst_lista_web');
  return result.recordset;
}

async function getProceso(inicio,fin,usuario) {
  const pool = await sql.connect(config);
  const result = await pool.request()
  .input('pfechadesde', sql.VarChar, inicio)
      .input('pfechahasta', sql.VarChar, fin)
   
    .input('pcodigo_usuario', sql.VarChar, usuario)
    .execute('up_proceso_Sellst_lista_web');
  return result.recordset;
}
async function getIngresoDetalle(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('pid_ingreso', sql.Int, id)    
    .execute('up_ingreso_Sellst_lista_procesos');
  return result.recordset;
}
async function getPrecio(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('pcodigo_usuario', sql.VarChar, id)    
    .execute('up_empresa_precio_Sellst_web');
  return result.recordset;
}
async function getProcesoById(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM jeruth.tab_proceso WHERE id_proceso= @id');
  return result.recordset[0] || null;
}

async function createProceso(data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id_proceso', sql.VarChar, data.id_proceso)
    .input('id_ingreso', sql.VarChar, data.id_ingreso)
    .input('codigo_usuario', sql.VarChar, data.codigo_usuario)
    .input('fecha_desde', sql.VarChar, data.fecha_desde)
    .input('fecha_hasta', sql.VarChar, data.fecha_hasta)
    .input('id_empresa', sql.VarChar, data.id_empresa)
    .query(`
      INSERT INTO jeruth.tab_proceso (id_proceso,id_ingreso,codigo_usuario,fecha_desde,fecha_hasta,id_empresa)
      VALUES ( @id_proceso,  @id_ingreso,  @codigo_usuario,  @fecha_desde,  @fecha_hasta,  @id_empresa, )
    `);
}

async function updateProceso(id, data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .input('id_proceso', sql.VarChar, data.id_proceso)
    .input('id_ingreso', sql.VarChar, data.id_ingreso)
    .input('codigo_usuario', sql.VarChar, data.codigo_usuario)
    .input('fecha_desde', sql.VarChar, data.fecha_desde)
    .input('fecha_hasta', sql.VarChar, data.fecha_hasta)
    .input('id_empresa', sql.VarChar, data.id_empresa)
    .query(`
      UPDATE jeruth.tab_proceso
      SET 
        id_proceso =@id_proceso)
        id_ingreso =@id_ingreso)
        codigo_usuario =@codigo_usuario)
        fecha_desde =@fecha_desde)
        fecha_hasta =@fecha_hasta)
        id_empresa =@id_empresa)
      WHERE id_firmante = @id
    `);
}

async function deleteProceso(id) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM jeruth.tab_proceso WHERE id_proceso = @id');
}

module.exports = {
  getProceso,
  getIngreso,
  getPrecio,
  getIngresoDetalle,
  getProcesoById,
  createProceso,
  updateProceso,
  deleteProceso
};

