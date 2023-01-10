import mongoose from 'mongoose'
mongoose.Promise = global.Promise



const modelSchema = new mongoose.Schema({
    name: String,
    capa: String,
    author:String,
    format: String,
    price: Number,
    lecture: String,
    quantity: Number
})

const modelName = 'Book'

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName]
} else{
    module.exports = mongoose.model(modelName, modelSchema)
}




