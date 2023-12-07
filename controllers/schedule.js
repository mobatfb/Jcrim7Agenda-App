//utilizar nuevas características de javascript
'use strict'
var bcrypt = require('bcrypt-nodejs');
var mongoosePaginate = require('mongoose-pagination');
var Schedule = require('../models/schedule'); // cargar modelo de usuario
var mongoose = require('mongoose')
var fs = require('fs'); //libreria file sistem de node
var path = require('path'); //permite trabajar con rutas de sistemas de ficheros
const { bus } = require('nodemon/lib/utils');
var allowApp = { name: 'sz7crimadm', password: "@jcrim2022" };
var allowAppU = { name: 'sz7crimUser', password: "qwAS123"  };
var allowAppX = { name: 'sz7crimSuperAdm', password: "aassleodffiIAs9" };
//CREAT DATA DEL SETTING
function save(req, res) {
    var data = req.body.req;
    var userAccess = req.body.appAccess;
    if (validApps(userAccess, allowAppU) == false) {
        return res.status(200).send({ status: "password" });
    } else {
        _validData()
    }
    function _validData() {
        if (!(data.dateUsed && data.fiscalie && data.fiscal && data.nroOfice && data.etap && data.section && data.num && data.delit && data.evidence && data.info)) {
            return res.status(200).send({ status: "empty" });
        } else {
            if (validData(data)) {
                return res.status(200).send({ status: "empty" });
            }
            _setObjetc()
        }
    }
    function _setObjetc() {
        var schedule = new Schedule();
        schedule.dateUsed = data.dateUsed
        schedule.yearUsed = data.yearUsed
        schedule.monthUsed = data.monthUsed
        schedule.dayUsed = data.dayUsed
        schedule.hourUsed = data.hourUsed
        schedule.fiscalie = data.fiscalie
        schedule.fiscal = data.fiscal
        schedule.nroOfice = data.nroOfice
        schedule.etap = data.etap
        schedule.section = data.section
        schedule.num = data.num
        schedule.delit = data.delit
        schedule.evidence = data.evidence
        schedule.info = data.info
        schedule.dateSave = genDate()
        _save(schedule)
    }
    function _save(schedule) {
        schedule.save((err, schedule) => {
            if (err) {
                return res.status(200).send({ status: "error" });
            }
            else if (schedule) {
                return res.status(200).send({ status: "created" });
            }
            else {
                return res.status(200).send({ status: "fail" });
            }
        })
    }
}
//CONSEGUIR DATA DEL SERVICIO
function read(req, res) {
    var scheduleMaster = {month:req.params.month, year:req.params.year} 
    console.log(scheduleMaster)
    Schedule.find({ "yearUsed": scheduleMaster.year, "monthUsed": scheduleMaster.month  }, (err, schedule) => {
        if (err) {
            return res.status(200).send({ status: "error", message: 'Error, vuelva a intentar', schedule: { fail: true } });
        }
        if (schedule) {
            return res.status(200).send({ schedule: schedule });
        } else {
            return res.status(200).send({ status: "warning", message: 'Se requiere guardar cambios', schedule: { fail: true, gen: true } });
        }
    });
}
//Edición de datos de usuario
function update(req, res) {
    var settingMaster = req.params.master
    var data = req.body.req;
    var userAccess = req.body.appAccess;
    if (validApps(userAccess, allowApp) == false) {
        return res.status(200).send({ status: "password" });
    } else {
        _validData()
    }
    function _validData() {
        if (!(data.numDescargo && data.numPericia && data.numAdmin && data.numMemo && data.numTelegram && data.numInform && data.numOrdService && data.numEvaluation && data.numResolution)) {
            return res.status(200).send({ status: "empty" });
        } else {
            if (!validNumber(data)) {
                return res.status(200).send({ status: "number" });
            }
            _setObjetc()
        }
    }
    function _setObjetc() {
        var setting = new Setting();
        setting.numDescargo = data.numDescargo
        setting.numPericia = data.numPericia
        setting.numAdmin = data.numAdmin
        setting.numMemo = data.numMemo
        setting.numTelegram = data.numTelegram
        setting.numInform = data.numInform
        setting.numOrdService = data.numOrdService
        setting.numEvaluation = data.numEvaluation
        setting.numResolution = data.numResolution
        setting.dateUpdate = genDate()
        _update(setting)
    }
    function _update(setting) {
        console.log("puto", settingMaster)

        Setting.findOneAndUpdate({ master: settingMaster }, {
            numDescargo: setting.numDescargo,
            numPericia: setting.numPericia,
            numAdmin: setting.numAdmin,
            numMemo: setting.numMemo,
            numTelegram: setting.numTelegram,
            numInform: setting.numInform,
            numOrdService: setting.numOrdService,
            numEvaluation: setting.numEvaluation,
            numResolution: setting.numResolution,
            dateUpdate: setting.dateUpdate
        },
            (err, settingUpdate) => {
                if (err) {
                    return res.status(200).send({ status: 'error', message: 'Error en la petición de actualizar servicio' });
                }
                if (settingUpdate) {
                    return res.status(200).send({
                        status: 'updated',
                        setting: settingUpdate,
                    });
                } else {
                    return res.status(200).send({ status: 'error', message: 'No se ha podido actualizar el servicio' });
                }

            });
    }

}
//eliminar de datos de usuario
function deletea(req, res) {
    var settingMaster = req.params.master
    var data = req.body.req;
    var userAccess = req.body.appAccess;
    if (validApps(userAccess, allowApp) == false) {
        return res.status(200).send({ status: "password" });
    } else {
        _validData()
    }
    function _validData() {
        if (!(data.numDescargo && data.numPericia && data.numAdmin && data.numMemo && data.numTelegram && data.numInform && data.numOrdService && data.numEvaluation && data.numResolution)) {
            return res.status(200).send({ status: "empty" });
        } else {
            if (!validNumber(data)) {
                return res.status(200).send({ status: "number" });
            }
            _setObjetc()
        }
    }
    function _setObjetc() {
        var setting = new Setting();
        setting.numDescargo = data.numDescargo
        setting.numPericia = data.numPericia
        setting.numAdmin = data.numAdmin
        setting.numMemo = data.numMemo
        setting.numTelegram = data.numTelegram
        setting.numInform = data.numInform
        setting.numOrdService = data.numOrdService
        setting.numEvaluation = data.numEvaluation
        setting.numResolution = data.numResolution
        setting.dateUpdate = genDate()
        _update(setting)
    }
    function _update(setting) {
        console.log("puto", settingMaster)

        Setting.findOneAndUpdate({ master: settingMaster }, {
            numDescargo: setting.numDescargo,
            numPericia: setting.numPericia,
            numAdmin: setting.numAdmin,
            numMemo: setting.numMemo,
            numTelegram: setting.numTelegram,
            numInform: setting.numInform,
            numOrdService: setting.numOrdService,
            numEvaluation: setting.numEvaluation,
            numResolution: setting.numResolution,
            dateUpdate: setting.dateUpdate
        },
            (err, settingUpdate) => {
                if (err) {
                    return res.status(200).send({ status: 'error', message: 'Error en la petición de actualizar servicio' });
                }
                if (settingUpdate) {
                    return res.status(200).send({
                        status: 'updated',
                        setting: settingUpdate,
                    });
                } else {
                    return res.status(200).send({ status: 'error', message: 'No se ha podido actualizar el servicio' });
                }

            });
    }

}
function validApps(userAccess, appAccess) {
    if (userAccess.name == appAccess.name && userAccess.password == appAccess.password) {
        return true;
    }
    return false
}
function genDate() {
    var today = new Date();
    var hour =
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();
    var preDate = new Date().toISOString().split('T')[0]
    var preDate2 = preDate.split('-')
    var date = preDate2[2] + "/" + preDate2[1] + "/" + preDate2[0]
    return date + " " + hour
}
function validData(aux) {
    if (aux.dateUsed.length<2 && aux.fiscalie.length<2 && aux.fiscal.length<2 &&
        aux.nroOfice.length<2 && aux.etap.length<2 &&
        aux.section.length<2 && aux.num.length<2 &&
        aux.delit.length<2 && aux.evidence.length<2 &&
        aux.info.length<2
    ) {
        return true
    }
}
module.exports = {
    save,
    read,
    update,
    deletea
}