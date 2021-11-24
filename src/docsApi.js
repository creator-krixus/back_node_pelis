//Creacion del esquema de la documentacion
/**
 * @swagger
 * components:
 *   schemas:
 *      Movies:
 *        type: object
 *        properties:
 *          titulo:
 *              type: string
 *              description: title movie
 *          genero:
 *              type: array
 *              description: genero the movie
 *          actores:
 *              type: array
 *              description: Names actors 
 *          resumen:
 *              type: string
 *              description: resumen the movie
 *          paises: 
 *              type: array
 *              description: paises donde se transmitio
 *          directores:
 *              type: array
 *              description: directores de la movie
 *          year:
 *              type: number
 *              description: year cuando se grabo la movie
 *          rating:
 *              type: number
 *              description: calificacion otorgada a la movie
 *          poster:
 *              type: string
 *              description: url donde se encuentra el poster de la movie
 *          idiomas:
 *              type: array
 *              description: idiomas a los cuales se ha traducido la movie
 *          clasificacion:
 *              type: string
 *          tipo:
 *              type: string
 *        required:
 *            -titulo
 *        example:
 *           titulo: La venganza
 *           genero: [terror, accion, suspenso]
 *           actores: [{nombre: tomas, apellido: salas, image: http://image.png}, {nombre: mateo, apellido: uribe, image: http://image.png}, {nombre: juana, apellido: marquez, image: http://image.png}]
 *           resumen: Una breve sinapsis de la trama de la pelicula
 *           paises: [usa, españa]
 *           directores: [{nombre: mateo, apellido: rodriguez, image: http://image.png}]
 *           year: 3021
 *           rating: 89
 *           poster: http://jhsgsfj.com
 *           idiomas: [spanish, english]
 *           clasificacion: cuatro estrellas
 *           tipo: pelicula
 */

//Endpoint para crear nuevas peliculas
/**
 * @swagger
 * /api/v1/movies:
 *  post:
 *      summary: Create new movie
 *      tags: [movies]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: New movie create!
 */

//Endpoint para obtener todas las peliculas de la base de datos
/**
 * @swagger
 * /api/v1/movies:
 *  get:
 *      summary: Return all movies of the first page
 *      tags: [movies]                
 *      responses:
 *          200:
 *              description: All movies
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Movies'
 */

//Endpoint para obtener las peliculas por paginas en la base de datos
/**
 * @swagger
 * /api/v1/movies?page={page}&limit={limit}:
 *  get:
 *      summary: Return all movies the each page selected
 *      tags: [movies]
 *      parameters:
 *          - in: path
 *            name: page
 *            type: integer    
 *            required: true  
 *            description: Number of the page to return    
 *          - in: path
 *            name: limit
 *            type: integer  
 *            required: true  
 *            description: Number the items to return                     
 *      responses:
 *          200:
 *              description: All movies of this page
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Movies'
 */



//Obtener una pelicula mediante el id de la pelicula
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  get:
 *      summary: Return one movies
 *      tags: [movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: One movie
 *      responses:
 *          200:
 *              description: One movie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/Movies'
 *          404:
 *              description: Movie not found
 */

//Editar la informacion de una pelicula
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  put:
 *      summary: Update one movies
 *      tags: [movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Update one movie
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Movies'
 *      responses:
 *          200:
 *              description: update movie
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: objet
 *                          items:
 *                              $ref: '#/components/schemas/Movies'
 *          404:
 *              description: Movie not found
 */


//Borra una pelicula
/**
 * @swagger
 * /api/v1/movies/{id}:
 *  delete:
 *      summary: Delete one movie
 *      tags: [movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Delete one movie
 *      responses:
 *          200:
 *              description: Delete movie
 *          404:
 *              description: Movie not found
 */