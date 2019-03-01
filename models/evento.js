const mongoose = require('mongoose');
 
mongoose.connect('mongodb://user:password123@ds035573.mlab.com:35573/certificados');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Certificado = new Schema({
  nombres: {type: String, required: true},
  apellidos: {type: String, required: true},
  tipo: {type: String, required: true},
  evento: {type: String, required: true},
  codigo: {type: String, required: true},
  fecha: {type: String, required: true}
});


module.exports.Certificado = mongoose.model('Certificado',Certificado)