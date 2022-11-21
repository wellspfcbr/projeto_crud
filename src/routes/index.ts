import { Router } from "express";
import { Request, Response } from "express";
import * as usuarioController from '../controllers/UsuarioController'
const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("Teste!!!!")
})

router.get('/usuarios',usuarioController.index)
//criando controller para visualizar a pagina de cadastro
router.get('/cadastro',usuarioController.cadastro)
//criando controller para receber os dados
router.post('/cadastro',usuarioController.cadastroUsuario)

router.get('/editar/:id',usuarioController.editaUsuario)

router.post('/editar/:id',usuarioController.atualizaUsuario)

router.get('/excluir/:id',usuarioController.excluiUsuario)



export default router