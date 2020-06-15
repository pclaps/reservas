const express = require('express');
const router = express.Router();

const {
    validateParams,
    getAllTipoActividad,
    getTipoActividad,
    saveTipoActividad,
    deleteTipoActividad,
    updateTipoActividad
}= require('../middlewares/tipoactividadMw');

//Listo actividades
router.get('/', getAllTipoActividad);
router.get('/:id', getTipoActividad);
router.post('/',saveTipoActividad);

router.delete('/:id', deleteTipoActividad);
//router.delete('/delete/:id', validateParams, deleteTipoActividad);
router.post('/update/:id',updateTipoActividad);

module.exports = router;
