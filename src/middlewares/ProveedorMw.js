connection = require('../database');
const Proveedor = require('../models/ProveedorModel');



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
const getAllProveedor=(req,res)=>{   
    Proveedor.getTodasTipAct()
    .then(function(Proveedor){       
        res.json(Proveedor);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getAllProveedor');
        res.json(err);
    })
};
//Obtengo un Tipo de Actividad por ID
const getProveedor=(req,res)=>{    
    const { id } = req.params;     
    Proveedor.getUnaTipAct(id)
    .then(function(Proveedor){        
        res.json(Proveedor);
    })
    .catch(function(err){  
        console.log(err);
        console.log('ocurrio un error en getProveedor');
        res.json(err);
    })
};

const saveProveedor=(req,res)=>{
    const {descripcion , imagen } = req.body;
    const data = {descripcion, imagen};
    Proveedor.guardarTipAct(data)
    .then(function(Proveedor){
        console.log(Proveedor);
        res.json(Proveedor);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en saveProveedor');
        res.json(err);
    })
};

const deleteProveedor=(req,res)=>{
    const { id } = req.params; // igual a     const id = req.params.id;
   
    Proveedor.deleteTipAct(id)
    .then(function(Proveedor){
        console.log(Proveedor);
        res.json(Proveedor);    
    })
    .catch(function(err){  
        console.log(err)    ;
        console.log('ocurrio un error en deleteProveedor');
        res.json(err);
    })
}

//para el post
const updateProveedor=(req,res)=>{

    const { id } = req.params; 
    const {descripcion,direccion } = req.body;
    const dataProv = {descripcion,direccion};
    Proveedor.updateProveedor(dataProv,id)
           .then(function(Proveedor){
              //console.log(Usuario);
                res.json(Proveedor);    
            })
            .catch(function(err){  
                console.log('ocurrio un error en deleteProveedor');
                res.json(err);
            })
}

module.exports = {
    validateParams,
    getProveedor,
    getAllProveedor,
    saveProveedor,
    deleteProveedor,
    updateProveedor
};
