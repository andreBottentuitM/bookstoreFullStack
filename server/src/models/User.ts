const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const modelSchema = new mongoose.Schema({
    name: String,
    cpf: String,
    date: String,
    phone:String,
    email: String,
    password: String,
    cep: String,
    street: String,
    number: String || undefined,
    complement: String || undefined,
    neighborhood: String,
    city:String,
    state: String,
},
{
  timestamps: true,
}

)

const modelName = 'User'

if(mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName]
} else{
    module.exports = mongoose.model(modelName, modelSchema)
}