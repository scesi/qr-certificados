const mongoose = require('mongoose'),
  USER = 'user',
  PASS = 'password123',
  HOST = 'ds035573.mlab.com',
  PORT = '35573',
  DATABASE_NAME = 'certificados',
  URL = `mongodb://${USER}:${PASS}@${HOST}:${PORT}/${DATABASE_NAME}`,
  Schema = mongoose.Schema,
  // ObjectId = Schema.ObjectId,
  Certificado = new Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    tipo: { type: String, required: true },
    evento: { type: String, required: true },
    codigo: { type: String, required: true },
    fecha: { type: String, required: true }
  });

mongoose.connect(URL, { useNewUrlParser: true });

module.exports.Certificado = mongoose.model('Certificado', Certificado)