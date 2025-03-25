const exp = require('express');
require('dotenv').config();
const app = exp();
const enrutador = require('./routes/router');

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());


app.get('/', function(req, res) {
    var productos = [
        { referencia: 1, nombre: 'ESQUINA THE BEGINNING', descripcion: 'Una de las primeras camisetas de nuestra colección, representa el inicio de algo grande. Con un diseño único que combina elementos urbanos y un toque de elegancia, esta pieza es perfecta para aquellos que buscan destacar con estilo..', precio: 70000, imagen: '/public/img/esquina.jpg', cantidad: 50, tipo: 'camiseta', medidas: "10cmx10cm", color: 'negro', genero: 'masculino'  },
        { referencia: 2, nombre: 'BIG HIT THE BEGINNING', descripcion: 'Inspirada en las calles y la cultura urbana, esta camiseta representa la esencia de la vida en la ciudad. Su diseño único captura la energía y el espíritu de la calle, perfecta para aquellos que viven y respiran la cultura urbana..', precio: 70000, imagen: '/public/img/BIGHIT.jpg', cantidad: 50, tipo: 'camiseta', medidas: "10cmx10cm", color: 'negro', genero: 'masculino'  },
        { referencia: 3, nombre: 'BLOOD OF CHRIST', descripcion: 'Descripción breve del producto.', precio: 55000, imagen: '/public/img/blood.jpg', cantidad: 50, tipo: 'camiseta', medidas: "10cmx10cm", color: 'negro', genero: 'masculino'  },
        { referencia: 4, nombre: 'GANGSTA LOVE', descripcion: 'Descripción breve del producto.', precio: 55000, imagen: '/public/img/gangsta_love.jpg', cantidad: 50, tipo: 'camiseta', medidas: "10cmx10cm", color: 'negro', genero: 'masculino'  },
        { referencia: 5, nombre: 'OLD PAIN FIRE', descripcion: 'Descripción breve del producto.', precio: 55000, imagen: '/public/img/OLDPAIN.jpg', cantidad: 50, tipo: 'camiseta', medidas: "10cmx10cm", color: 'negro', genero: 'masculino'  },
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";
    res.render('pages/index', {
        productos: productos,
        tagline: tagline, color: 'negro', 
    });
});
app.use('/v1', enrutador);
app.listen(process.env.PORT, ()=>{
    console.log('servidor en linea');
})
