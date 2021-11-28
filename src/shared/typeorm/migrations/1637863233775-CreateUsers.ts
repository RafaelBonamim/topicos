import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1637863233775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Criar uma tabela no banco de dados
        await queryRunner.createTable(new Table({
            name: 'users',
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
                    // COLUNA EMAIL
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    // COLUNA PASSWORD
                    name: 'password',
                    type: 'varchar', 
                },
                {
                    // COLUNA AVATAR
                    name: 'avatar',
                    type: 'varchar', 
                    isNullable: true
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
