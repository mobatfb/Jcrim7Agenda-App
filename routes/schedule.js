
'use strict'

var express = require('express');
var scheduleController = require('../controllers/schedule');
var md_auth = require('../middlewares/authenticated');
var api = express.Router();

api.post('/save', scheduleController.save);
api.get('/read/:month/:year', scheduleController.read);
api.put('/update/:id', scheduleController.update);
api.put('/delete/:id', scheduleController.deletea);
module.exports = api; //exportar todas las rutas