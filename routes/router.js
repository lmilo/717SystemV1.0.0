const exp = require('express');
const router = exp.Router();
const controlProducto = require('../backend/controller/productos.controller');

router.get('/productos',controlProducto.buscar);
router.get('/productos/:x',controlProducto.buscarPorNom);
router.get('/productos/ref/:ref',controlProducto.buscarPorRef);
router.post('/productos/post',controlProducto.insetar);
router.put('/productos-ingresar/:ref',controlProducto.actualizar);
router.delete('/productos-eliminar/:ref',controlProducto.eliminar);

module.exports = router


