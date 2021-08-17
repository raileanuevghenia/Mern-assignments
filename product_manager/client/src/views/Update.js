import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [ title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const inputStyling = {
        width: "305px", 
        border: "2px solid darkgrey", 
        backgroundColor: "#f2f2f2", 
        height: "40px", 
        padding: "3px",
        borderRadius: "5px",
        textAlign: "center",
        margin: "15px 0"
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + id + "/edit", {
            title,
            price,
            description
        })
            .then(res => console.log(res));
        navigate("/products");
    }
    return (
        <div className="container pt-5">
            <h1> Update a product </h1>
            <form onSubmit = { updateProduct }>
                <div style= { inputStyling }>
                    <label style={{width: "100px"}}>Title</label>
                    <input 
                    type = "text" 
                    name = "title" 
                    value = { title }
                    onChange = {(e) => {setTitle(e.target.value)}} 
                    />
                </div>
                <div style={ inputStyling }>
                    <label style={{ width: "100px"}}>Price</label>
                    <input 
                    type = "text" 
                    name = "price" 
                    value = { price }
                    onChange = {(e) => {setPrice(e.target.value)}} 
                    />
                </div>
                <div style={ inputStyling }>
                    <label style={{width: "100px"}}>Description</label>
                    <input 
                    type = "text" 
                    name = "description" 
                    value = { description }
                    onChange = {(e) => {setDescription(e.target.value)}}
                    />
                </div>
                <button style={{ backgroundColor: "#f2f2f2",width: "110px", marginLeft: "95px", borderRadius: "5px"}} type="submit">Update</button>
            </form>
        </div>
    )
}

export default Update;