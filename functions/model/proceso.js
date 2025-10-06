/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 5/10/2025 23:06:54
  -------------------------------
  Modificado:
  Motivo: 
*/
 

module.exports = {
    id_empresa: Number,
    proceso: String,
    id_proceso : String,
    id_ingreso : String,
    codigo_usuario : String,
    fecha_desde : String,
    fecha_hasta : String,
    id_empresa : String,
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

