const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cardRecommended = [
    {
        id: '1',
        name: 'Gigabyte GeForce GTX 1050Ti D5 4GB GDDR5',
        image: 'geforce-1050ti.jpg',
        price: '310,99€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '2',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    }
]

const cardList = [
    {
        id: '1',
        name: 'Gigabyte GeForce GTX 1050Ti D5 4GB GDDR5',
        image: 'geforce-1050ti.jpg',
        price: '310,99€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '2',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '3',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '4',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '5',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '6',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '7',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '8',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '9',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '10',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '11',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '12',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '13',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '14',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '15',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '16',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '17',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '18',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '19',
        name: 'GTX 2020',
        image: 'gf-1050ti.jpg',
        price: '56,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '20',
        name: 'Gigabyte  GTX 1080 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '1230,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '21',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '123,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '22',
        name: 'AMD Vega 8',
        image: 'gf-1050ti.jpg',
        price: '140,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '23',
        name: 'Gigabyte GeForce GT 1030 OC 2G GDDR5',
        image: 'gf-1050ti.jpg',
        price: '200,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },
    {
        id: '24',
        name: 'Gigabyte GeForce GT 1030 OC 2G',
        image: 'gf-1050ti.jpg',
        price: '13,61€',
        description: [
            'Powered por GeForce® GT 1030',
            'Integrado con 2GB de memoria GDDR5 de 64 bits',
            'Compatible con HDMI 4K a 60Hz ',
            'Reloj de la memoria: 6008 MHz',
            'Procesamiento de gráficos: GeForce® GT 1030'
        ]

    },

]
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/recommended-graphics',function (req, res) {
    respuesta = {
        error: false,
        code: 200,
        messeage: 'respuesta del usuario',
        response: cardRecommended
        };
    res.send(respuesta);
    });

app.get('/graphics-cards',function (req, res) {
    respuesta = {
        error: false,
        code: 200,
        messeage: 'respuesta del usuario',
        response: cardList
        };
    res.send(respuesta);
});

app.get('/graphics-cards/:id',function (req, res) {
    console.log(req.params.id);
    respuesta = {
        error: false,
        code: 200,
        messeage: 'respuesta del usuario',
        response: cardList[req.params.id]
        };
    res.send(respuesta);
    });

   app.use(function(req, res, next) {
    respuesta = {
     error: true, 
     codigo: 404, 
     mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
   });
   app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });