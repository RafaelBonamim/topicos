// Vejamos que o controller não conterá regra de negócio
// são medidas no serviço

import { request, Request, response, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";
import Product from "../typeorm/entities/Product";

class ProductController {
    create(arg0: string, create: any) {
        throw new Error("Method not implemented.");
    }
    //
    // Criando o método para criar um novo produto no banco de dados
    public async creat(request: Request, response: Response) :Promise<Response>{
        //
        //Recuperar os dados para inserção
        let {name, price, quantity} = request.body;
        //
        // Criar objeto da classe CreateProductService
        let createProduct = new CreateProductService()
        //
        // Executar a inserção
        let product = await createProduct.execute({
            name, price, quantity
        })
        //
        // Retornar produto inderido
        return response.json(product);
    }
    // Criando o método para remover um novo produto no banco de dados
    public async delete(request: Request, response: Response): Promise <Response>{
        //
        // O id do produto p/ remoção, virá na URL
        let {id} = request.params
        //
        // Criar objeto de Service
        let deleteProductService = new DeleteProductService()
        //
        await deleteProductService.execute({id});
        //
        return response.json([]);
    }
//
// CRIAR MÉTODO PARA LISTAR TODOS OS PRODUTOS  NO BANCO DE DADOS
    public async index(request: Request, response: Response): Promise<Response>{
        let listProductService = new ListProductService()
        let products = await listProductService.execute();
         // Retornar produto inserido
         return response.json(products);
    }
//
// CRIAR MÉTODO PARA MOSTRAR TODOS OS PRODUTOS  NO BANCO DE DADOS
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showProductService = new ShowProductService()
        let product = await showProductService.execute({id});
        return response.json(product);
    }
//
// CRIAR MÉTODO PARA ATUALIZAR PRODUTOS  NO BANCO DE DADOS
    public async update(request: Request, response: Response): Promise<Response>{
        //recuperar id
        let {id} = request.params
        let {name, quantity, price} = request.body
        let updateProductService = new UpdateProductService()
        let product = await updateProductService.execute({id, name, quantity, price})
        return response.json(product)
    }
}
//
// EXPORTAR A CLASSE
export default ProductController