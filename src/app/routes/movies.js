const express = require('express');
const movie = require('../controllers/movies')
const router = express.Router();

//Crear un nuevo registro de pelicula
router.post('/', movie.createMovie);

//Obtener la lista completa de las peliculas
router.get('/', movie.getMovies);

//Obtener una pelicula de la lista
router.get('/:id', movie.getMovie);

//Actualizar un pelicula
router.put('/:id', movie.updateMovie);

//Borrar una pelicula
router.delete('/:id', movie.deleteMovie);

module.exports = router;