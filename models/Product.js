const supabase = require('./db'); // Importa a configuração do Supabase

// Função para listar todos os produtos
async function listarProdutos() {
    const { data, error } = await supabase.from('Produtos').select('*');
    if (error) throw new Error(error.message);
    return data; // Retorna os produtos
}

module.exports = {
    listarProdutos,
};
