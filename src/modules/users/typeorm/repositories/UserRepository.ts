import { EntityRepository, Repository } from "typeorm";
import User from "../entities/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
    static save(newUser: any) {
        throw new Error("Method not implemented.");
    }
    static create: any;
    // Esta classe herdará os métodos de inserção, remoção, alteração e consulta => TypeORM
    // Além disso, podemos criar outros métodos;
    // Async -> Assíncrono, quem o chama pode realizar atividades em paralelo, 
    // sem precisar esperar pela resposta. No entanto, todo método assíncrono
    // deve retornar uma "promessa".
    public async findByName(name: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                name
            }
        })
        return product;
    }
    public async findByEmail(email: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                email
            }
        })
        return product;
    }
    public async findById(id: string): Promise<User | undefined> {
        let product = this.findOne({ // procura pelo produto com determinado nome e retorna o primeiro encontrado
            where: {
                id
            }
        })
        return product;
    }
}

export default UserRepository;