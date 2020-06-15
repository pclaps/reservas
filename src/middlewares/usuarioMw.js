connection = require('../database');
const Usuario = require('../models/usuarioModel');
/*
const getUsuario = (req, res, next) => {

    if(req.session.user){
        req.user = req.session.user;
    }
    next();
}
*/
const validateParams = (req, res, next) => {
    res.juan = 'hola';
    if(isNaN(req.params.id)) {
        res.status(404).send({
            success: false,
            message: "El parametro es invalido"
        });
    } else {
        next();
    }
};
const getAllUsuario=(req,res)=>{   
    Usuario.getUsuarios()
    .then(function(Usuario){       
        res.json(Usuario);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllUsuario');
        res.json(err);
    })
};
//Obtengo un Tipo de Actividad por ID
const getUsuario=(req,res)=>{    
    const { id } = req.params;     
    Usuario.getUsuarioID(id)
    .then(function(Usuario){        
        res.json(Usuario);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getUsuario');
        res.json(err);
    })
};
//Guardo un Tipo de Actividad
const saveUsuario=(req,res)=>{
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion } = req.body;
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion};
    Usuario.guardarUsuario(dataUsu)
    .then(function(Usuario){
        console.log(Usuario);
        res.json(Usuario);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveUsuario');
        res.json(err);
    })
};

const deleteUsuario=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
    Usuario.deleteUsuario(id)
    .then(function(Usuario){
        console.log(Usuario);
        res.json(Usuario);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteUsuario');
        res.json(err);
    })
}

//para el post
const updateUsuario=(req,res)=>{

    const { id } = req.params; 
    const {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion } = req.body;
    const dataUsu = {clave,email,nombreUsuario,apellidoUsuario,fechaNacimiento,telefono,fecCreado,fecModif,rol,direccion};
    Usuario.updateUsuario(dataUsu,id)
           .then(function(Usuario){
              //console.log(Usuario);
                res.json(Usuario);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en deleteUsuario');
                res.json(err);
            })
   
}

module.exports = {
   validateParams,
   getUsuario,
   getAllUsuario,
   saveUsuario,
   deleteUsuario,
   updateUsuario
};