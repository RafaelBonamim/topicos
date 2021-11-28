//Classe de Erro
class AppError {
    // DECLARAÇÃO DE VARIÁVEIS
    // (Apenas de leitura, depois que o objeto é criado)
    // (não podemos alterar os valores das variáveis)
    public readonly message: string;
    public readonly statusCode: number;
    //
    // Criar método construtor
    // O valor do statusCode será default = 400
    // (se não for passado nenhum valor)
    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
//
// EXPORTAR A CLASSE
export default AppError;