const supabase = require('./db'); // Configuração do Supabase

async function criarPedido(clienteId, carrinho) {
    // Calcula o total do pedido
    const total = carrinho.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

    try {
        // 1. Insere o pedido na tabela `pedidos`
        const { data: pedidoData, error: pedidoError } = await supabase
            .from('pedidos')
            .insert([{ cliente_id: clienteId, total }])
            .select()
            .single();

        if (pedidoError) throw new Error(`Erro ao criar pedido: ${pedidoError.message}`);

        const pedidoId = pedidoData.id;

        // 2. Insere os itens do pedido na tabela `pedidos_item`
        const itens = carrinho.map((item) => ({
            pedido_id: pedidoId,
            produto_id: item.id,
            quantidade: item.quantidade,
            preco: item.preco,
        }));

        const { data: itensData, error: itensError } = await supabase
            .from('pedidos_item')
            .insert(itens);

        if (itensError) throw new Error(`Erro ao inserir itens do pedido: ${itensError.message}`);

        return { pedidoId, pedidoData, itensData }; // Retorna os dados do pedido e itens
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

module.exports = { criarPedido };
