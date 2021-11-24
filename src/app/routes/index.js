const express = require('express');
const router = express.Router();
const movies = require('./movies')

const apiRouter = app => {
    app.use('/api/v1', router);
    router.use('/movies', movies)
    //Ruta de respuesta para cuando no se encuentra nada
    router.get('*', (req, res) => {
        res.status(404);
        res.send({ error: 'Not found' });
});
};

module.exports = apiRouter;