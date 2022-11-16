import {Request, Response} from 'express'
import {Usuario} from '../models/Usuario'


export const index = async (req:Request, res:Response) =>{
//criando variavel que pegue os usuarios do banco
    let users = await Usuario.findAll()

//chamando users no mustache
    res.render("pages/usuarios",{
        users
    })
}
//controler para visualizar dados
export const cadastro = async (req:Request, res:Response) =>{

    res.render("pages/cadastrar")
}



// controler para receber dados
export const cadastroUsuario = async(req:Request, res:Response) =>{
    //recebendo nome e email atraves do corpo da requisição
    const {nome, email} = req.body
    //SE o usuario preencheu nome e email
    //eu crio nome e email
    if(nome && email){
        await Usuario.create({
            nome,
            email
        })
    }
    //redirecionando para rota usuarios
    res.redirect('/usuarios')
}

export const editaUsuario = async(req:Request, res:Response) =>{
    const {id} = req.params
//Encontrando usuario pela chave primarioa
    const user = await Usuario.findByPk(id)

    res.render('pages/editar',{
        user,
        id
    })
}

export const atualizaUsuario = async(req:Request,res:Response) =>{
    const {id} = req.params
    const {nome, email} = req.body

    await Usuario.update({
        nome,
        email
    },{
        where:{
            id:id
        }
    })
}

export const excluiUsuario = async(req:Request, res:Response) =>{
    const {id} = req.params
//Encontrando usuario pela chave primarioa
    const user = await Usuario.findByPk(id)

    res.render('pages/excluir',{
        user,
        id
    })
}