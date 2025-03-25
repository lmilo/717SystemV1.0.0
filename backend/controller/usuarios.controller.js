const modeloUsuario = require('../models/usuarios.model');

exports.buscar = async (req,res)=>{
    let resultado = await modeloUsuario.find({});
    console.log(resultado)
    if (resultado){
        res.json({"resultado" : resultado})
    }else{
        res.json({"Error" : "No se encontraron Usuarios"})                                                                     
    }
};

exports.buscarPorNom = async (req,res)=>{
    let resultado = await modeloUsuario.findOne({"nombre":req.params.x});
    console.log(resultado)
    if (resultado){
        res.json(resultado)
    }else{
        res.json({"Error" : "No se encontraron Usuarios"})                                                                     
    }
};

exports.buscarPorCc = async (req,res)=>{
    let resultado = await modeloUsuario.findOne({"cedula":req.params.cc});
    console.log(resultado)
    if (resultado){
        res.json(resultado)
    }else{
        res.json({"Error" : "No se encontraron Usuarios"})                                                                     
    }
};

exports.insetar = async (req,res)=>{
    const nuevoUsuario = {
        "cedula": req.body.referencia,
        "nombre": req.body.nombre,
        "apellido": req.body.precio,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion,
        "correo": req.body.correo,
        "password": req.body.password,
        "genero": req.body.genero

    };
    let Insercion = await modeloUsuario.create(nuevoUsuario);
    if(Insercion)
        res.json({"Resultado" : "Usuario insertado"})
    else
        res.json({"Error" : "No se pudo insertar el Usuario"})
}; 

exports.actualizar = async (req,res)=>{
    const UsuarioEditado ={
        "cedula": req.body.referencia,
        "nombre": req.body.nombre,
        "apellido": req.body.precio,
        "telefono": req.body.telefono,
        "direccion": req.body.direccion,
        "correo": req.body.correo,
        "password": req.body.password,
        "genero": req.body.genero
    };
    let Actualizacion = await modeloUsuario.findOneAndUpdate({"cedula":req.params.cc}, UsuarioEditado);
    if (Actualizacion)
        res.status(200).json({"mensaje": "actualizacion exitosa"})
    else
        res.status(404).json({"mensaje": "Usuario no encontrado"})


};

exports.eliminar = async (req,res)=>{
    console.log(req.params.ref , req.body.referenciaUsuario)
    let eliminacion = await modeloUsuario.findOneAndDelete({"cedula":req.params.cc});
    if (eliminacion)
        res.status(200).json({"mensaje": "Usuario eliminado"})
    else
        res.status(404).json({"mensaje": "Usuario no encontrado"})
}; 