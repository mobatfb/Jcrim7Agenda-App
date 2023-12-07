//DEFINICION DEL MODELO USUARIO

//utilizar nuevas características de javascript
'use strict'

//cargar la libreria de mongoose
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//esquema para empresa 
const scheduleSchema = new Schema({
  userId: String,
  dateUsed: String,
  yearUsed: String,
  monthUsed: String,
  dayUsed: String,
  hourUsed: String,
  fiscalie: String,
  fiscal:String,
  section:String,
  etap:String,
  num:String,
  nroOfice:String,
  delit:String,
  evidence:String,
  info:String,
	dateSave: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

//para poder utilizar el modelo fuera de este fichero
//en la base de datos se buscara la colección users ya que se User se pondrá en minuscula y se agregará la letra s
module.exports = mongoose.model('schedule', scheduleSchema); 

