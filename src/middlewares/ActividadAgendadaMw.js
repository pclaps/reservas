connection = require('../database');
const ActAge = require('../models/ActAgeModel');



const validateParams = (req, res, next) => {
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};
const getAllActAge=(req,res)=>{   
    ActAge.getTodasActividadAgendada()
    .then(function(ActAge){       
        res.json(ActAge);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllActAge');
        res.json(err);
    })
};
//Obtengo un Tipo de Actividad por ID
const getActAge=(req,res)=>{    
    const { id } = req.params;     
    ActAge.getUnaActividadAgendada(id)
    .then(function(ActAge){        
        res.json(ActAge);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getActAge');
        res.json(err);
    })
};
//Guardo un Tipo de Actividad
const saveActAge=(req,res)=>{
    const {descripcion , imagen } = req.body;
    const data = {descripcion, imagen};
    ActAge.guardarActividadAgendada(data)
    .then(function(ActAge){
        console.log(ActAge);
        res.json(ActAge);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveActAge');
        res.json(err);
    })
};

const deleteActAge=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    ActAge.deleteActividadAgendada(id)
    .then(function(ActAge){
        console.log(ActAge);
        res.json(ActAge);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteActAge');
        res.json(err);
    })
}

//para el post
const updateActAge=(req,res)=>{

    const { id } = req.params; 
    const newActividadAgendada = req.body;
    console.log(newActividadAgendada);    
    connection.query('UPDATE ActAge set ?  WHERE id = ?',[newActividadAgendada,id],(err, rows)=>{
         if (err){
         // console.log('error ActAge');
             res.json(err);
         }
         console.log(success);
    }); 
}

module.exports = {
    validateParams,
    getActAge,
    getAllActAge,
    saveActAge,
    deleteActAge,
    updateActAge
};
