import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/repositories/ProductRepository"

//
interface Irequest{
    id: string
}

// CLASSE DE LISTAGEM DE PRODUTOS
// mostra um único produto
class ShowProductService {
    // obter o produto
   public async execute({id}: Irequest) : Promise<Product>{
    let productRepository = getCustomRepository(ProductRepository)
    let productExist = await productRepository.findOne(id)
    if(!productExist){
        throw new AppError(`Desculpe, o produto não existe!`) // sai do método
    }
    // Produto existe
    return productExist
   }
    
}
// EXPORTAR A CLASSE
export default ShowProductService