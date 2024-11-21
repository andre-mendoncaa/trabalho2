const express = require('express');
const router = express.Router();
const productModel = require('../models/Product'); // Modelo para produtos

// Rota para listar todos os produtos
router.get('/api', async (req, res) => {
    try {
        const produtos = await productModel.listarProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
