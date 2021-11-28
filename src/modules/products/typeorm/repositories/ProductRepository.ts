import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/Product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
    static create: any;
    // Esta classe herdará os métodos de inserção, remoção, alteração e consulta => TypeORM
    // Além disso, podemos criar outros métodos;
    // Async -> Assíncrono, quem o chama pode realizar atividades em paralelo, 
    // sem precisar esperar pela resposta. No entanto, todo método assíncrono
    // deve retornar uma "promessa".
    public async findByName(name: string): Promise<Product | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                name
            }
        })
        return product;
    }
}

export default ProductRepository;