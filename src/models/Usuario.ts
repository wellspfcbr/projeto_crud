import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../Config/mysql'

export interface UsuarioInstance extends Model{
    id: number
    nome: string
    email: string

}

export const Usuario = sequelize.define<UsuarioInstance>("Usuario,",{
    id:{
        primaryKey:true,
        type:DataTypes.STRING
    },
    nome:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
},{
    tableName:'usuario',
    timestamps:false
})