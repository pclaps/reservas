const connection = require('../database');
//Defino las funcionalidades para la clase 
const GET_ACTIVIDADES_BY_ACTIVIDAD ="SELECT * FROM ACTIVIDAD WHERE name = ?";
//const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set name=?,description=?,image_id=?,password=?,usuario=?";
const SAVE_ACTIVIDAD ="INSERT INTO ACTIVIDAD set ?";
const DELETE_ACTIVIDADES = "DELETE * FROM ACTIVIDAD WHERE name = ?";
//console.log(GET_ACTIVIDADES_BY_ACTIVIDAD);

class ACTIVIDAD {
    constructor (idActividad, descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor){       
        this.idActividad = idActividad,
        this.descripcion = descripcion,
        this.tipoActividad = tipoActividad,
        this.cuposTotales = cuposTotales,
        this.imagen = imagen,
        this.idUsuarioResp = idUsuarioResp,
        this.idProveedor = idProveedor
    }

    static getACTIVIDADES (name){
        return new Promise(function(resolve, reject){
            connection.query(GET_ACTIVIDADES_BY_ACTIVIDAD,[name],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                   
                    const {descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor} = results[0];//aca tengo los nombres posta                    
                    resolve(new ACTIVIDAD(descripcion,tipoActividad,cuposTotales,imagen,idUsuarioResp,idProveedor))
                }
            });
        })
    }

    static saveACTIVIDAD(name,description,image_id,clave,usuario){
        return new Promise(function(resolve, reject){
            console.log('promesa '+SAVE_ACTIVIDAD);
            const newACTIVIDAD ={
                name,
                description,
                image_id,
                password,
                usuario
            }
            console.log(newACTIVIDAD);
            connection.query(SAVE_ACTIVIDAD,[newACTIVIDAD],function(error,results){
                if (error){
                    console.log(error);
                    reject(error);
                } else {                                     
                    //console.log('res: '+newACTIVIDAD);
                    const {name,description,image_id,password,usuario} = newACTIVIDAD;//Uso los datos de la nueva tarea
                    resolve(new ACTIVIDAD(name,description,image_id,clave,usuario))
                }
            });
        })
    }
}

module.exports = ACTIVIDAD;

