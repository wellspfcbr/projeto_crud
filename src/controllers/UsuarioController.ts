import {Request, Response} from 'express'
import { Usuario } from '../models/usuario'


export const index = async (req:Request, res:Response) =>{
//criando variavel que pegue os usuarios do banco
    let users = await Usuario.findAll()

//chamando users no mustache
    res.render("pages/usuarios",{
        users
    })
}


