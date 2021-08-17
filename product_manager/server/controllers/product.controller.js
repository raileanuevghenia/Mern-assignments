const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {
        console.log(allProducts);
        res.json(allProducts);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    })
}
module.exports.createProduct = (req, res) => {
    const { title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then((newProduct) => {
        console.log(newProduct);
        res.json(newProduct);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    })
}
module.exports.getProductById = (req, res) => {
    Product.findById({_id:req.params.id})
        .then((oneProduct) => {
            res.json(oneProduct)
        })
        .catch(err => res.status(400).json(err))
}
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators: true,
    })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err));
}
module.exports.deleteProduct = (req, res) => {
    Product.deleteByIdAndUpdate({_id: req.params.id})
        .then(deletedProduct => res.status(200).sent("Product deleted"))
        .catch(err => res.status(400).json(err))
}


