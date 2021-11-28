import { getCustomRepository } from "typeorm"
import AppError from "../../../shared/errors/AppError"
import Product from "../typeorm/entities/Product"
import ProductRepository from "../typeorm/repositories/ProductRepository"
//
//
interface Irequest{
    id: string,
    name: string,
    price: number,
    quantity: number
}
//
class UpdateProductService {
    //
    public async execute({id, name, price, quantity}: Irequest): Promise<Product>{
        //
        let productRepository = getCustomRepository(ProductRepository)
        //Verifica se existe, para atualizar
        // busca ou procura pelo primeiro produto
        let product = await productRepository.findOne(id)
        if(!product){
            throw new AppError(`Desculpe, o produto não existe!`) // sai do método
        }
        // Produto existe
        // verifica se atualizará com um nome existente
        let productExists = await productRepository.findByName(name) //busca ou procura por um produto com o nome passado como parâmetro
        if (productExists){
            throw new AppError(`Desculpe, o produto com este nome já existe!`)
        }
        // ATUALIZAR
        product.name = name;
        product.quantity = quantity;
        product.price = price;
        //
        await productRepository.save(product)
        //
        return product 
    }
    }

export default UpdateProductService