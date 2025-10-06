/*
  -------------------------------
  Autor : Martin Huaman
  Creado : 26/06/2025 19:17:47
  -------------------------------
  Modificado:
  Motivo: 
*/
 

module.exports = {
    id_empresa: Number,
    
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

