const express = require('express');
const router = express.Router();
const actividadRouter = require('../middlewares/ActividadMw');

//Listo actividades
//router.get('/',actividadRouter.list);


router.get('/:id', );

/*router.post('/add',customerController.save);
router.get('/delete/:id',customerController.delete);
router.get('/update/:id',customerController.edit);

router.post('/update/:id',customerController.update);
*/
//exporto
module.exports = router;
