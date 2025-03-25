const mongoose = require('../config/database');

const schemaProducto = new mongoose.Schema({
    referencia:{
        type: [Number,"la referencia debe de ser entera"],
        required: [true, "la referencia esr obligatoria"],
        unique: true,
    },
    nombre:{
        type: [String,"El nombre debe de ser texto"],
        required: [true, "el nombre es obligatorio"],
    },
    
    tipo:{
        type: [String,"El tipo debe de ser texto"],
        required: [true, "el tipo es obligatorio"],
    },
    medidas:{
        type: [String,"La medida debe de ser texto"],
        required: [true, "La medida es obligatorio"],
    },
    color:{
        type: [String,"El color debe de ser texto"],
        required: [true, "El color es obligatorio"],
    },
    precio:{
        type: [mongoose.Types.Decimal128, "El precio debe de ser numerico"],
        default: 0,
        min: [0.0, "los precios no pueden ser negativos"],
    },
    genero:{
        type: [String,"El genero debe de ser texto"],
        required: [true, "El genero es obligatorio"],
    },
    descripcion:{
        type: [String,"La descripcion debe de ser texto"],
        required: [true, "La descripcion es obligatorio"],
    },
    cantidad: {
        type: Number,
        default: 0,
        min: [0, "La cantidad no puede ser negativa"],
        validate: [Number.isInteger, "La cantidad debe ser un número entero"]
    },
    peso:{
        type: Number,
        default: 0,
        min: [0, "El peso no puede ser negativo"],
        validate: [Number.isInteger, "El peso debe ser un número entero"]
    }
    
},{versionKey:false});

const producto = mongoose.model('Producto',schemaProducto);
module.exports = producto;