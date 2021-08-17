import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Edit = (props) => {
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        const { id } = props;
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res) => {
            setOneProduct(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return(
        <div className="container pt-4" style={{textAlign: "center", marginTop: "200px"}}>
            <Link to="/products">Go back</Link>
            <h1> {oneProduct.title} </h1>
            <h4>Price: ${oneProduct.price}</h4>
            <h4>Description: {oneProduct.description}</h4>
        </div>
    )
}
export default Edit;