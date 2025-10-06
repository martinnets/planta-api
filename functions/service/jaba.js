/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 10:41:41
  -------------------------------
  Modificado:
  Motivo: 
*/
const JabaModel = require("../model/jaba");
const sql = require('mssql');
const config = require('../config/db');

async function getJaba(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('pid_empresa', sql.Int, id)
    .execute('up_jaba_Sellst_empresa');
  return result.recordset;
}

async function getJabaById(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM jeruth.tab_jaba WHERE id_jaba= @id');
  return result.recordset[0] || null;
}

async function createJaba(data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id_jaba', sql.VarChar, data.id_jaba)
    .input('id_proceso', sql.VarChar, data.id_proceso)
    .input('id_ingreso', sql.VarChar, data.id_ingreso)
    .input('id_cliente', sql.VarChar, data.id_cliente)
    .input('cliente', sql.VarChar, data.cliente)
    .input('codigo_tipo_jaba', sql.VarChar, data.codigo_tipo_jaba)
    .input('ingreso', sql.VarChar, data.ingreso)
    .input('salida', sql.VarChar, data.salida)
    .input('stock', sql.VarChar, data.stock)
    .input('fecha', sql.VarChar, data.fecha)
    .input('cantidad', sql.VarChar, data.cantidad)
    .input('codigo_tipo_movimiento', sql.VarChar, data.codigo_tipo_movimiento)
    .query(`
      INSERT INTO jeruth.tab_jaba (id_jaba,id_proceso,id_ingreso,id_cliente,cliente,codigo_tipo_jaba,ingreso,salida,stock,fecha,cantidad,codigo_tipo_movimiento)
      VALUES ( @id_jaba,  @id_proceso,  @id_ingreso,  @id_cliente,  @cliente,  @codigo_tipo_jaba,  @ingreso,  @salida,  @stock,  @fecha,  @cantidad,  @codigo_tipo_movimiento, )
    `);
}

async function updateJaba(id, data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .input('id_jaba', sql.VarChar, data.id_jaba)
    .input('id_proceso', sql.VarChar, data.id_proceso)
    .input('id_ingreso', sql.VarChar, data.id_ingreso)
    .input('id_cliente', sql.VarChar, data.id_cliente)
    .input('cliente', sql.VarChar, data.cliente)
    .input('codigo_tipo_jaba', sql.VarChar, data.codigo_tipo_jaba)
    .input('ingreso', sql.VarChar, data.ingreso)
    .input('salida', sql.VarChar, data.salida)
    .input('stock', sql.VarChar, data.stock)
    .input('fecha', sql.VarChar, data.fecha)
    .input('cantidad', sql.VarChar, data.cantidad)
    .input('codigo_tipo_movimiento', sql.VarChar, data.codigo_tipo_movimiento)
    .query(`
      UPDATE jeruth.tab_jaba
      SET 
        SET id_jaba =@id_jaba)

        SET id_proceso =@id_proceso)

        SET id_ingreso =@id_ingreso)

        SET id_cliente =@id_cliente)

        SET cliente =@cliente)

        SET codigo_tipo_jaba =@codigo_tipo_jaba)

        SET ingreso =@ingreso)

        SET salida =@salida)

        SET stock =@stock)

        SET fecha =@fecha)

        SET cantidad =@cantidad)

        SET codigo_tipo_movimiento =@codigo_tipo_movimiento)
      WHERE id_firmante = @id
    `);
}

async function deleteJaba(id) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM jeruth.tab_jaba WHERE id_jaba = @id');
}

module.exports = {
  getJaba,
  getJabaById,
  createJaba,
  updateJaba,
  deleteJaba
};

