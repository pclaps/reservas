const connection = require('../database');
const bcrypt = require('bcrypt');

const renderRegister= (req, res, next) => {
    console.log('renderRegistro');
    res.render('registro');
}

const createUser = (req, res, next) => {
     console.log('create User');
     console.log(req.body);
    const { email,clave,name,lastname } = req.body;    
   
    const saltRounds=10;
    bcrypt.hash(clave,saltRounds,function(err,hash){
        //en hash esta la clave encriptada
        //este como se llama?? es hash??
        console.log(hash);
        const usuario  = {
            email,
            nombreUsuario : name,
            apellidoUsuario : lastname,
            clave : hash
        };
        connection.query('INSERT INTO usuario SET ?', [usuario],  (error, results, fields) => {
            if (error)   {
                console.log(error);
                if (error.errno ==1062)
                {
                    console.log(error.sqlMessage);
                    res.render('registro');
                }
                throw error;
            } 
            console.log('insert register');
            res.redirect('/login');
        });
    })

}

module.exports = { createUser, renderRegister}
