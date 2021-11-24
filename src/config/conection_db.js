const mongoose = require('mongoose');

const conn = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedtopology: true
        })
        .then(() => console.log('Data Base conected'))
        .catch((error) => console.error(error))
}

module.exports = conn;