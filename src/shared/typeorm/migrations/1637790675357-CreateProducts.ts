import { networkInterfaces } from "os";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1637790675357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criar uma tabela no banco de dados
        await queryRunner.createTable(new Table({
            name: 'products',
            columns:[
                {
                    // COLUNA ID
                    name: 'id',
                    type: 'uuid', // tipo de identificador único
                    isPrimary: true, // essa coluna é chave primária
                    generationStrategy:'uuid', // Estratégia de Geração (Única)
                    default: 'uuid_generate_v4()'
                }, 
                {
                    // COLUNA NAME
                    name: 'name',
                    type: 'varchar'
                },
                {
                    // COLUNA PRICE
                    name: 'price',
                    type: 'decimal',
                    precision: 10, // Precisão de 10 casas antes da vírgula
                    scale:2 // precisão de 2 casas depois da vírgula
                },
                {
                    // COLUNA QUANTITY
                    name: 'quantity',
                    type: 'int', // tipo inteiro
                },
                {
                    // COLUNA CREATED AT
                    name: 'created_at',
                    type: 'timestamp with time zone', // Quando o campo foi criago
                    default: 'now()' // função chamada
                },
                {
                    // COLUNA UPDATED AT
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()' 
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
