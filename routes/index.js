const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

router.get('/carrinho', (req, res) => {
    res.render('carrinho');
});

router.get('/login', (req, res) => {
    res.render('auth/login'); 
});

router.get('/signup', (req, res) => {
    res.render('auth/signup'); 
});

router.post('/login', authController.postLogin); 
router.post('/signup', authController.postSignup);

module.exports = router;
