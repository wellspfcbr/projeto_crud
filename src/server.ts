import  express, { Router }  from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'


import Rotas from './routes/index'

dotenv.config()

const server = express()

//configurações do mustache
server.set('view engine', 'mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

//caminho da pasta public

server.use(express.static(path.join(__dirname,'../public')))

//habilitar o post
server.use(express.urlencoded({extended:true}))

server.use(Rotas)

server.listen(process.env.PORT)

server.use((req,res) =>{
    res.send("página não encontrada")
})