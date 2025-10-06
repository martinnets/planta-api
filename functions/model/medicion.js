/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 28/09/2025 12:31:03
  -------------------------------
  Modificado:
  Motivo: 
*/
 

module.exports = {
    id_empresa: Number,
    medicion: String,
    date : String,
    time : String,
    id : String,
    EAct_kWh : String,
    ERInd_kvarh : String,
    ERCap_kvarh : String,
    VAC1_V : String,
    VAC2_V : String,
    VAC3_V : String,
    IAC1_A : String,
    IAC2_A : String,
    IAC3_A : String,
    POWA1_W : String,
    POWA2_W : String,
    POWA3_W : String,
    POWact_W : String,
    POWrea_var : String,
    PF : String,
    POWR1_var : String,
    POWR2 : String,
    var : String,
    POWR3_var : String,
    PF1 : String,
    PF2 : String,
    PF3 : String,
    codigo_estado: String,
    usurio_creacion: String,
    fec_creacion: {
        type: Date,
        default: Date.now,
      },
    usuario_modicacion: String,
    fecha_modicacion: {
        type: Date,
        default: Date.now,
      }
}

