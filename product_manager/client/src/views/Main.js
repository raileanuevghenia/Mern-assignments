import React, { useEffect, useState } from 'react';
import Create from '../components/Create';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId ));
    }
    return (
        <div>
           <Create/>
           <hr/>
           <ProductList products={products} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;

