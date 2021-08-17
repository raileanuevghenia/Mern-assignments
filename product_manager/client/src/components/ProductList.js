
import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const { products } = props;
    const {removeFromDom} = props;
    const deleteOneProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div className="container pt-4">
            <h1>All Products:</h1>
            <div>
                {
                    products.map((product, index) => (
                        <h4 key={index}> 
                        <Link to={"/products/" + product._id }> {product.title} </Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
                        |
                        <button onClick={(e) =>{deleteOneProduct(product._id)}}>Delete</button>
                        </h4>
                    ))
                }
                
            </div>
        </div>
    )
}
export default ProductList;

