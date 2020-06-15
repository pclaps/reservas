const express = require('express');
const router = express.Router();

const {
    validateParams,
    getUsuario,
    getAllUsuario,
    saveUsuario,
    deleteUsuario,
    updateUsuario
}= require('../middlewares/usuarioMw');

//Listo actividades
router.get('/', getAllUsuario);
router.get('/:id', getUsuario);
router.post('/',saveUsuario);

router.delete('/:id', deleteUsuario);
//router.delete('/delete/:id', validateParams, deleteusuario);
router.post('/update/:id',updateUsuario);

module.exports = router;
