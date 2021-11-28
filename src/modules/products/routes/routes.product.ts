// vamos utilizar a dependência do express
import { Router } from "express";
// importar o controle
import ProductController from "../controllers/ProductController";
//
// IMPORTAR O CELEBRATE
import {celebrate, Joi, Segments} from 'celebrate'
//
// Criar um objeto de roteamento
let productRouter = Router()
//
// Objeto de controle
let productController = new ProductController()
//
//Criar as rotas
productRouter.get('/', productController.index) // lista todos os produtos
//
// SHOW / MOSTRAR
// valida que é do tipo uuid (identificador)
productRouter.get('/:id',
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    }
}), productController.show) // mostra o produto
//
// CREATE / CRIAR
// Tratar o erro de não informar o produto para inserir
productRouter.post('/',
celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
    }
}), productController.create) // insere o produto
//
// DELETE / REMOVER
// valida que é do tipo uuid (identificador)
productRouter.delete('/:id', 
celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    }
}), productController.delete) // remove um produto
//
// UPDATE / ATUALIZAR
// valida que é do tipo uuid e deve conter o produto
productRouter.put('/:id',celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().uuid().required()
    },
    [Segments.BODY] :{
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
        }
}), productController.update) // atualiza um produto
//
export default productRouter