const sql = require('mssql');
const config = require('../config/db');

async function getUsuario() {
  const pool = await sql.connect(config);
  const result = await pool.request()
   .execute('up_usuario_sellst');
  return result.recordset;
}
async function getUsuarioCodigo(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
   .input('codigo', sql.VarChar, id)
   .execute('up_usuario_sel_codigo');
   //.query('SELECT * FROM tab_usuario');
  return result.recordset[0] || null;
}
async function getUsuarioSesion(data) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('id_empresa', sql.Int, data.id_empresa)
    .input('desde', sql.Date, data.desde)
    .input('hasta', sql.Date, data.hasta)
    .input('tipo_usuario', sql.Char(1), data.tipo_usuario)
    .input('numero_sesion', sql.Int, data.numero_sesion)
    .execute('up_sesion_sellst_filtro');
  return result.recordset;
}
async function getUsuarioById(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query(`
      SELECT 
        nro_doc_identidad,apellido_paterno,apellido_materno, 
        nombres,mail1,id_empresa,id_usuario,
        indicador_administrador,
        indicador_postulante,
        indicador_firmante,
        indicador_trabajador,
        indicador_reclutador
      FROM tab_usuario WHERE id_usuario = @id`);
  return result.recordset[0] || null;
}

async function createUsuario(data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('nro_doc', sql.VarChar, data.nro_doc)
    .input('cliente', sql.VarChar, data.cliente)
    .input('direccion', sql.VarChar, data.direccion)
    .query(`
      INSERT INTO tab_usuario (nro_doc, cliente, direccion)
      VALUES (@nro_doc, @cliente, @direccion)
    `);
}

async function updateUsuario(id, data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .input('nro_doc_identidad', sql.VarChar, data.nro_doc_identidad)
    .input('apellido_paterno', sql.VarChar, data.apellido_paterno)
    .input('apellido_materno', sql.VarChar, data.apellido_naterno)
    .input('nombres', sql.VarChar, data.nombres)
    .input('mail1', sql.VarChar, data.mail1)
    .input('indicador_administrador', sql.Bit, data.indicador_administrador)
    .input('indicador_firmante', sql.Bit, data.indicador_firmante)
    .input('indicador_reclutador', sql.Bit, data.indicador_reclutador)
    .query(`
      UPDATE tab_usuario
      SET  
        nro_doc_identidad=@nro_doc_identidad,
        apellido_paterno=@apellido_paterno,
        apellido_materno=@apellido_materno,
        nombres=@nombres,
        mail1=@mail1,
        indicador_administrador=@indicador_administrador,
        indicador_firmante=@indicador_firmante,
        indicador_reclutador=@indicador_reclutador,
        fecha_modificacion=getdate()
      OUTPUT inserted.*
      WHERE id_usuario = @id
    `);
}

async function deleteUsuario(id) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM tab_usuario WHERE id_usuario = @id');
}
async function login(data) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('codigo', sql.VarChar, data.codigo_usuario)
    .input('clave', sql.VarChar, data.contrasenia)
    .execute('up_usuario_login_energias');
  return result.recordset[0].token  || null;
}
async function reset(data) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('codigo', sql.VarChar, data.codigo_usuario)
    .input('clave', sql.VarChar, data.contrasenia)
    .execute('[up_usuario_upd_reset]');
   
  return result || null;
}
async function verify_token(token) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('token', sql.VarChar, token)
    .execute('[up_usuario_verify_token]');
  return result.recordset[0];
}
async function loginlog(data) {
    const pool = await sql.connect(config);
    await pool.request()
      .input('id_usuario', sql.VarChar, data.id_usuario)
      .input('tipo_usuario', sql.VarChar, data.tipo_usuario)
      .input('device', sql.NVarChar(sql.MAX), JSON.stringify(data.device))
      .input('network', sql.NVarChar(sql.MAX), JSON.stringify(data.network))
      .input('location', sql.NVarChar(sql.MAX), JSON.stringify(data.location))
      .input('photo', sql.NVarChar(sql.MAX), data.photo)
      .execute('up_usuario_login_log');
}
async function createfirma(data) {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('id_usuarios', sql.NVarChar(sql.MAX), JSON.stringify(data.id_usuarios))
      .input('usu_crea', sql.VarChar, data.usu_crea)
      .input('id_usuario', sql.VarChar, data.id_usuario)
      .input('id_proceso', sql.VarChar, data.id_proceso)
      .input('device', sql.NVarChar(sql.MAX), JSON.stringify(data.device))
      .input('network', sql.NVarChar(sql.MAX), JSON.stringify(data.network))
      .input('location', sql.NVarChar(sql.MAX), JSON.stringify(data.location))
      .input('photo', sql.NVarChar(sql.MAX), data.photo)
      .input('codigo_estado', sql.VarChar, data.codigo_estado)
      .input('tipo_usuario', sql.VarChar, data.tipo_usuario)
      .execute('up_usuario_ins_firma');
      
    return result.recordset;
}

// const query = `SELECT id_usuario, tipo_doc,nro_doc,apellido_paterno,apellido_materno,nombres
//  FROM tab_usuario u  WHERE token=$1`;
 // const result=await db.query(query,[token])
 // return result.rows[0] ;

module.exports = {
  getUsuario,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  login,
  verify_token,
  reset,
  loginlog,
  getUsuarioSesion,
  createfirma,
  getUsuarioCodigo,
};
