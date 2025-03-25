const modeloProducto = require('../models/productos.models');

exports.buscar = async (req, res) => {
    let resultado = await modeloProducto.find({});
    res.json({ "resultado": resultado });
};

exports.buscarPorNom = async (req, res) => {
    let resultado = await modeloProducto.findOne({ "nombre": req.params.x });
    if (resultado) {
        res.json(resultado);
    } else {
        res.json({ "Error": "No se encontraron productos" });
    }
};

exports.buscarPorRef = async (req, res) => {
    let resultado = await modeloProducto.findOne({ "referencia": req.params.ref });
    if (resultado) {
        res.json(resultado);
    } else {
        res.json({ "Error": "No se encontraron productos" });
    }
};

exports.insertar = async (req, res) => {
    const nuevoProducto = new modeloProducto({
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        medidas: req.body.medidas,
        color: req.body.color,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        peso: req.body.peso
    });
    let Insercion = await modeloProducto.create(nuevoProducto); 
    if (Insercion) {
        res.json({ "Resultado": "insercion exitosa" });
    } else {
        res.json({ "Error": "Producto no encontrado" });
    }
};

exports.actualizar = async (req, res) => {
    const ProductoEditado =
        {
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            medidas: req.body.medidas,
            color: req.body.color,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            peso: req.body.peso
        };
    let Actualizacion = await modeloProducto.findOneAndUpdate({ "referencia": req.params.ref },ProductoEditado); 
    if (Actualizacion) {
        res.json({ "Resultado": "Actualización exitosa" });
    } else {
        res.json({ "Error": "Producto no encontrado" });
    }
};

exports.eliminar = async (req, res) => {
    let eliminacion = await modeloProducto.findOneAndDelete({ "referencia": req.params.ref });
    if (eliminacion) {
        res.json({ "Resultado": "Producto eliminado" });
    } else {
        res.json({ "Error": "Producto no encontrado" });
    }
};