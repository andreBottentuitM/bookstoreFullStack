import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from '../server/src/routes'


const server = express()


dotenv.config()
mongoose.set("strictQuery", true)

mongoose.connect(process.env.DATABASE as string,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false
} as any)

mongoose.Promise = global.Promise

mongoose.connection.on('error', (error) => {
    console.log("Erro: ", error.message)
})

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))


server.use(express.static(__dirname+'/public'))

server.use('/', router)

server.listen(process.env.PORT, ()=>{
    console.log(`- Rodando no endereço: ${process.env.BASE}`)
})


