const exp = require('express');
const router = exp.Router();
const controlProducto = require('../backend/controller/productos.controller');

router.get('/usuarios',controlProducto.buscar);
router.get('/usuarios/:x',controlProducto.buscarPorNom);
router.get('/usuarios/:cc',controlProducto.buscarPorCc);
router.post('/usuarios',controlProducto.insetar);
router.put('/usuarios-actualizar/:cc',controlProducto.actualizar);
router.delete('/usuarios-eliminar/:cc',controlProducto.eliminar);

module.exports = router