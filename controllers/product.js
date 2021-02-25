const Product = require('../models/store');

module.exports = {
    getProducts,
    showProduct,
    createProduct,
    deleteProduct,
    updateProduct
};


async function getProducts(req, res) {
    const products = await Product.find({});
    res.status(200).json(products);
}

async function showProduct(req, res) {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
}

async function createProduct(req, res) {
    const product = await Product.create(req.body);
    res.status(200).json(product);
}

async function deleteProduct(req, res) {
    const deleteAProduct = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteAProduct);
}

async function updateProduct(req, res) {
    const updateAProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateAProduct);
}

