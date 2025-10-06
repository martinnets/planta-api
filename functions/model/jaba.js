/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 10:41:41
  -------------------------------
  Modificado:
  Motivo: 
*/
 

module.exports = {
    id_empresa: Number,
    jaba: String,
    id_jaba : String,
    id_proceso : String,
    id_ingreso : String,
    id_cliente : String,
    cliente : String,
    codigo_tipo_jaba : String,
    ingreso : String,
    salida : String,
    stock : String,
    fecha : String,
    cantidad : String,
    codigo_tipo_movimiento : String,
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

