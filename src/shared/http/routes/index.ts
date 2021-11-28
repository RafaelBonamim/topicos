// utilizar a classe Routes do Express
import { Router } from "express";
//
// IMPORTAR ROTA DO PRODUTO
import productRouter from '../../../modules/products/routes/routes.product'
//
import userRouter from '../../../modules/products/routes/routes.product'

// criar objeto de rotas
let routes = Router();
routes.use('/products', productRouter)

routes.use('/users', userRouter)

//
//Exporta o objeto
export default routes;