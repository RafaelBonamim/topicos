import { getCustomRepository } from "typeorm"
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository"

// CLASSE DE LISTAGEM DE PRODUTOS
class ListUserService {
    //
    // Listar todos os produtos no repositório
    public async execute(): Promise<User[]>{
        //
        let userRepository = getCustomRepository(UserRepository)
        //
        let users = userRepository.find(); // retorna todos os produtos
        return users;
    }
}

export default ListUserService