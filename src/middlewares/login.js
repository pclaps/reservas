const connection = require('../database');
const bcrypt = require('bcrypt');
//Implementacion de loginconst 

renderLogin= (req, res, next) => {
    console.log('renderLogin');
    res.render('login');
}

const userLogin = (req, res, next) => {
    console.log('userlogin');
    
   const { email,clave} = req.body;    
  
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



module.exports = {
    renderLogin,
    userLogin
}
   