//CLASSE PRODUTO
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
// Entidade chamada Produto
@Entity('users')
// DECLARAÇÃO DE CLASSE
class User {
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
    // COLUNA EMAIL
    @Column()
    email: string;
    //
    // COLUNA PASSWORD
    @Column()
    password: string;
    //
    // COLUNA AVATAR
    @Column()
    avatar: string;
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
export default User;