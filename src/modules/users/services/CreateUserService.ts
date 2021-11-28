// TRATAMENTO DE VALIDAÇÕES E REGRAS DE NEGÓCIO

import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repositories/UserRepository";
import {hash} from 'bcryptjs'

// vamos criar uma interface que é um tipo de produto
interface IRequest {
    name: string,
    email: string,
    password: string
}

// vamos criar a classe
class CreateUserService {

    //vamos criar um método chamado execute para executar a inserção
    // recebe os dados do produto e retorna o produto inserido
    public async execute({name, email, password}: IRequest): Promise<User> {
        // obter o repositório do produto
        let userRepository = getCustomRepository(UserRepository)
        // vamos verificar se o produto já existe
        let userExists = await userRepository.findByEmail(email);
        if (userExists) {
            console.log(`Usuário já existe!`)
            //
            // statusCode = 400 (não foi informado outro código)
            throw new AppError(`Pedimos desculpas, mas já existe um usuário com este email!`)
        }

        // Criptografar a senha / dependência bcryptjs
        let senhaCriptografada = await hash(password, 8)
        // cria o usuário para inserção
        let newUser = UserRepository.create({
            name,
            email,
            password: senhaCriptografada
        })
        // efetivamente insere
        await UserRepository.save(newUser);
        // retorno o novo produto
        return newUser;
    }
}

export default CreateUserService