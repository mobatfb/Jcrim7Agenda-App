var Setting = require('../models/settings'); // cargar modelo de usuario
function readSetting(settingMaster, res) {
    Setting.findOne({ master: settingMaster }, (err, setting) => {
        if (err) {
            return res.status(200).send({ status: "error", message: 'Error, vuelva a intentar', setting: { fail: true } });
        }
        if (setting) {
            console.log("conDatos:" + setting)
            return res.status(200).send({ setting: setting });
        } else {
            console.log("sinDatos")
            return res.status(200).send({ status: "warning", message: 'Se requiere guardar cambios', setting: { fail: true, gen: true } });
        }
    });
}

module.exports = {
    readSetting
}