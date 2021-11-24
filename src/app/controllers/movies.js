const movieSchema = require('../models/movieSchema')


//Creo un objeto controlador vacio
const controller = {};

//Funcion controladora para crear el registro de la pelicula
controller.createMovie = (req, res) => {
    const movie = movieSchema(req.body);
    movie
        .save()
        .then((data) =>  res.json(data))
        .catch((error) =>  res.json({ message: error }))
}

//funcion controladora para visualizar la lista completa de las peliculas
controller.getMovies = (req, res) => {
    movieSchema
    //Con find me devuelve todos los valores que tiene la base de datos
        .find()
        .then((data) => {
            if(data.length != 0){
                res.json({data:data})
            }else{
                res.send('No hay nada para mostrar');
            }
        })
        .catch((error) =>  res.json({message: error}))
}

//funcion para visualizar la informacion por paginas
controller.getMovies = (req, res) => {
    const options = req.query;
    movieSchema
    //Con paginate puedo paginar cuantos valores me regresa de la base de datos    
        .paginate({}, options)
        .then((data) => {
            if(data.length != 0){
                res.json({data:data})
            }else{
                res.send('No hay nada para mostrar');
            }
        })
        .catch((error) =>  res.json({message: error}))
}

//Funcion controladora para visualizar una pelicula identificada por su id
controller.getMovie = (req, res) => {
    const { id } = req.params; 
    movieSchema
        .findById(id)
        .then((data) =>  res.json({ data: data }))
        .catch((error) =>  res.json({message: error}))
}

//Funcion controladora para actualizar una pelicula identificada por su id
controller.updateMovie = (req, res) => {
    const { id } = req.params;
    const { titulo, genero, actores, resumen, paises, directores, year, rating, poster, idiomas, clasificacion, tipo } = req.body;
    movieSchema
        .updateOne({_id: id}, {$set:{titulo, genero, actores, resumen, paises, directores, year, rating, poster,clasificacion,idiomas,tipo}})
        .then((data) =>  res.json(data))
        .catch((error) =>  res.json({message: error}))
}

//Funcion controladora para eliminar una pelicula identificada por su id
controller.deleteMovie = (req, res) => {
    const { id } = req.params; 
    movieSchema
        .remove({_id:id})
        .then((data) =>  res.json(data))
        .catch((error) =>  res.json({message: error}))
}

module.exports = controller;