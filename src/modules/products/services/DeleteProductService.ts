// CRIAR UMA REGRA DE NEGÓCIO PARA REMOVER UM PRODUTO
//
// Deve ser feito em /Services e não /Controller
//

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import ProductRepository from "../typeorm/repositories/ProductRepository";

// Vamos criar uma interface - Tipo de Dado
interface IRequest{
    id: string;
}
//
class DeleteProductService {
    // Realizar o método assíncrono execute
    public async execute({id}:IRequest): Promise<void> {
        //
        // RECUPERAR O REPOSITÓRIO DO PRODUTO
        let productRepository = getCustomRepository(ProductRepository)
        //
        // PROCURAR PELO PRODUTO REMOVIDO
        // await = aguarda pela resposta...
        let productExist = await productRepository.findOne(id)
        //
        if (!productExist) { // O produto não existe
            throw new AppError(`Lamentamos, o produto não existe...`) // lança o erro - sai do método
        }
        // O PRODUTO EXISTE, VAMOS REMOVER!
        await productRepository.remove(productExist)
    }
}
//
// EXPORTAR A CLASSE
export default DeleteProductService