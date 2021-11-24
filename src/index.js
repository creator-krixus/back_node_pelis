const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const conn = require('../src/config/conection_db');
const apiRouter = require('../src/app/routes');
require('dotenv').config();

//Swagger utilizado para documentar la api
const path = require('path')
const swaggerUI = require('swagger-ui-express');
const swaggerJsDocs = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Documentacion API peliculas",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:8500"
            }
        ]
    },
    //Se debe colocar al ruta exacta de donde se encuentran la documentacion
    apis: [path.join(__dirname, '../src/docsApi.js')]
}

//configuracion
app.set('port', process.env.PORT);

//middlewares
//Middleware para comprimir las respuestas
app.use(compression());
//Middlewares usados para integrar seguridad a nuestra api
app.use(cors());
app.use(helmet())
//Middleware para parseo a json
app.use(express.json());
//Middleware para que se nos informe el estado de las peticiones en desarrollo
app.use(morgan('dev'));

//Configuracion de la documentacion de la api y ruta donde se encuentra
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs(swaggerSpec)));

//Enrutador de la aplicacion
apiRouter(app)

//Conexion a base de datos
conn();

//server listening
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});