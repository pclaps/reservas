const ACTIVIDAD = require('../models/actividadModel');

Actividad = require('../models/actividadModel');

//Handlers para los endpoints de la API de Tasks

const getActividad=(req,res)=>{
    ACTIVIDAD.getACTIVIDADES()    
        .then(task => {
            res.json({
                task,
            });
        })
        .catch(err => {
            next(err);
        });

    }
module.exports = {getActividad};
