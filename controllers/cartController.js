const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.addToCart = (req, res) => {
    const productId = req.body.productId;
    Product.findById(productId)
        .then(product => {
            const cartItem = new Cart({ productId: product._id, quantity: 1 });
            return cartItem.save();
        })
        .then(() => res.redirect('/cart'))
        .catch(err => console.log(err));
};

exports.getCart = (req, res) => {
    Cart.find()
        .then(cartItems => res.render('cart', { cartItems }))
        .catch(err => console.log(err));
};
