const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, "Title is required"],
    minLength:[2, "Title must be at least 2 characters"],
},
    price: {
    type: String,
    required: [ true, "Price is required"],
},
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Description must be at least 5 characters"],
    }
}, {timestamps: true});
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;
