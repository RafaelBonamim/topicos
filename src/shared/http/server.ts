import 'reflect-metadata'
// Servidor Web com Dependência do Express
import express, { NextFunction, Request, Response } from 'express'
//
// Importar a parte de erro do express
import 'express-async-errors'
//
// Permite as permições em APIS
import cors from 'cors'
//
// Chama o index.ts da pasta typeorm -> conecta no banco de dados com orm
import '../typeorm'
// criando o servidor
let servidor = express()
//
// Servidor usando o CORS
servidor.use(cors())
//
// O Servidor precisa Converter em JSON o conteúdo advindo do FrontEnd
servidor.use(express.json())

//Importar as Rotas
import routes from './routes'
import {errors} from 'celebrate'
import AppError from '../errors/AppError'
//utilizando
servidor.use(routes)
servidor.use(errors()) // Celebrate lida com os erros
servidor.use(
    (error: Error, rquest: Request, response: Response, next: NextFunction) => {
        if(error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        // Caso não seja um erro nosso
        return response.status(500).json({
            status: 'error',
            message: 'Internal error server'
        })
    }
)
// Server será executado, aguardando pelas requisições
servidor.listen(3333, () => {
    console.log(`Up and running!`)
})