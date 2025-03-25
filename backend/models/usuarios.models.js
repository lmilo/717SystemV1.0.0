const mongoose = require('../config/database');

const schemaUsuario = new mongoose.Schema({
    cedula:{
        type: [Number,"la cedula debe de ser entera"],
        required: [true, "la cedula esr obligatoria"],
        unique: true,
    },
    nombre:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    apellido:{
        type: [String,"El apellido debe de ser texto"],
        required: [true, "el apellido es obligatorio"],
    },
    telefono:{
        type: [String, "El telefono debe de ser num"],
        default: 0,
        min: [0.0, "los precios no pueden ser negativos"],
    },
    direccion:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    correo:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    password:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    genero:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
},{versionKey:false});

const usuario = mongoose.model('Usuario', schemaUsuario);
module.exports = usuario;