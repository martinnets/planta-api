/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 28/09/2025 12:31:03
  -------------------------------
  Modificado:
  Motivo: 
*/
const sql = require('mssql');
const config = require('../config/db');

async function getdata(data) {
  const pool = await sql.connect(config);
   const result = await pool.request()
    .input('startDate', sql.Date, data.fecha_desde)
    .input('endDate', sql.Date, data.fecha_hasta)
    .execute('up_data_sellst');
  return result.recordset;
}

async function getdataById(id) {
  const pool = await sql.connect(config);
  const result = await pool.request()
    .input('id', sql.Int, id)
    .query('SELECT * FROM tab_data WHERE id_data= @id');
  return result.recordset[0] || null;
}

async function createdata(data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('json', sql.NVarChar(sql.MAX), JSON.stringify(data))
   .execute('[up_medicion_ins_json]');
}

async function updatedata(id, data) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .input('date', sql.VarChar, data.date)
    .input('time', sql.VarChar, data.time)
    .input('id', sql.VarChar, data.id)
    .input('EAct_kWh', sql.VarChar, data.EAct_kWh)
    .input('ERInd_kvarh', sql.VarChar, data.ERInd_kvarh)
    .input('ERCap_kvarh', sql.VarChar, data.ERCap_kvarh)
    .input('VAC1_V', sql.VarChar, data.VAC1_V)
    .input('VAC2_V', sql.VarChar, data.VAC2_V)
    .input('VAC3_V', sql.VarChar, data.VAC3_V)
    .input('IAC1_A', sql.VarChar, data.IAC1_A)
    .input('IAC2_A', sql.VarChar, data.IAC2_A)
    .input('IAC3_A', sql.VarChar, data.IAC3_A)
    .input('POWA1_W', sql.VarChar, data.POWA1_W)
    .input('POWA2_W', sql.VarChar, data.POWA2_W)
    .input('POWA3_W', sql.VarChar, data.POWA3_W)
    .input('POWact_W', sql.VarChar, data.POWact_W)
    .input('POWrea_var', sql.VarChar, data.POWrea_var)
    .input('PF', sql.VarChar, data.PF)
    .input('POWR1_var', sql.VarChar, data.POWR1_var)
    .input('POWR2', sql.VarChar, data.POWR2)
    .input('var', sql.VarChar, data.var)
    .input('POWR3_var', sql.VarChar, data.POWR3_var)
    .input('PF1', sql.VarChar, data.PF1)
    .input('PF2', sql.VarChar, data.PF2)
    .input('PF3', sql.VarChar, data.PF3)
    .query(`
      UPDATE tab_data
      SET 
        SET date =@date)

        SET time =@time)

        SET id =@id)

        SET EAct_kWh =@EAct_kWh)

        SET ERInd_kvarh =@ERInd_kvarh)

        SET ERCap_kvarh =@ERCap_kvarh)

        SET VAC1_V =@VAC1_V)

        SET VAC2_V =@VAC2_V)

        SET VAC3_V =@VAC3_V)

        SET IAC1_A =@IAC1_A)

        SET IAC2_A =@IAC2_A)

        SET IAC3_A =@IAC3_A)

        SET POWA1_W =@POWA1_W)

        SET POWA2_W =@POWA2_W)

        SET POWA3_W =@POWA3_W)

        SET POWact_W =@POWact_W)

        SET POWrea_var =@POWrea_var)

        SET PF =@PF)

        SET POWR1_var =@POWR1_var)

        SET POWR2 =@POWR2)

        SET var =@var)

        SET POWR3_var =@POWR3_var)

        SET PF1 =@PF1)

        SET PF2 =@PF2)

        SET PF3 =@PF3)
      WHERE id_firmante = @id
    `);
}

async function deletedata(id) {
  const pool = await sql.connect(config);
  await pool.request()
    .input('id', sql.Int, id)
    .query('DELETE FROM tab_data WHERE id_data = @id');
}

module.exports = {
  getdata,
  getdataById,
  createdata,
  updatedata,
  deletedata
};

