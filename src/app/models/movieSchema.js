const mongoose = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const movieSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: Array
    },
    actores: {
        type:Array
    },
    resumen: {
        type: String
    },
    paises: {
        type: Array
    },
    directores: {
        type: Array
    },
    year: {
        type: Number
    },
    rating: {
        type: Number
    },
    poster: {
        type: String
    },
    idiomas: {
        type: Array
    },
    clasificacion: {
        type: String
    },
    tipo: {
        type: String
    }
},
    {
        //Con timestamps me pone la fecha de creacion del objeto
        timestamps:true,
        //Con versionKey le quito el valor que trae por defecto la version
        versionKey:false
    });
    //Con este plugin se consigue la paginacion
movieSchema.plugin(paginate);
module.exports = mongoose.model('peliculas', movieSchema);