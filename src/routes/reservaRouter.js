const express = require('express');
const router = express.Router();

const {
    validateParams,
    getAllreserva,
    getreserva,
    savereserva,
    deletereserva,
    updatereserva
}= require('../middlewares/reservaMw');

//Listo actividades
router.get('/', getAllreserva);
router.get('/:id', getreserva);
router.post('/',savereserva);

router.delete('/:id', deletereserva);
//router.delete('/delete/:id', validateParams, deletereserva);
router.post('/update/:id',updatereserva);

module.exports = router;
