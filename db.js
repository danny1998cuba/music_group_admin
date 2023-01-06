const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Database Connected'))
        .catch((e) => console.log(`Error ocurred => ${e}`))
}