import { getCustomRepository } from "typeorm"
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository"

// CLASSE DE LISTAGEM DE PRODUTOS
class ListProductService {
    //
    // Listar todos os produtos no repositório
    public async execute(): Promise<Product[]>{
        //
        let productRepository = getCustomRepository(ProductRepository)
        //
        let products = productRepository.find(); // retorna todos os produtos
        return products;
    }
}

export default ListProductService