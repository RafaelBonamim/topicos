//CLASSE PRODUTO
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn  } from "typeorm";
// Entidade chamada Produto
@Entity('products')
// DECLARAÇÃO DE CLASSE
class Product {
    // DECLARAÇÃO DE VARIÁVEIS
    //
    // COLUNA ID
    @PrimaryGeneratedColumn('uuid')
    id: string;
    //
    // COLUNA NOME
    @Column()
    name: string;
    //
    // COLUNA PREÇO
    @Column('decimal')
    price: number;
    //
    // COLUNA QUANTIDADE
    @Column('int')
    quantity: number;
    //
    // COLUNA CREATED_AT
    @CreateDateColumn()
    created_at: Date;
    //
    // COLUNA CREATED_AT
    @CreateDateColumn()
    updated_at: Date;
}
// EXPORTAR A CLASSE
export default Product;