const productModel = require('../models/Product');

// Controlador para listar todos os produtos
async function listarProdutos(req, res) {
    try {
        const produtos = await productModel.listarProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    listarProdutos,
};
