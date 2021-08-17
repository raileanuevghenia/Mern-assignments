import { useState } from "react";
import axios from 'axios';


const Create = (props) => {
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

    const submitForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
    }

    return (
        <div className="container pt-5">
            <h1>Product Manager </h1>
            <form onSubmit = {(e) => submitForm (e)}>
                <div style= { inputStyling }>
                    <label style={{width: "100px"}}>Title</label>
                    <input 
                    type = "text" 
                    name = "title" 
                    value = { title }
                    onChange = {(e) => setTitle(e.target.value)} 
                    />
                </div>
                <div style={ inputStyling }>
                    <label style={{ width: "100px"}}>Price</label>
                    <input 
                    type = "text" 
                    name = "price" 
                    value = { price }
                    onChange = {(e) => setPrice(e.target.value)} 
                    />
                </div>
                <div style={ inputStyling }>
                    <label style={{width: "100px"}}>Description</label>
                    <input 
                    type = "text" 
                    name = "description" 
                    value = { description }
                    onChange = {(e) => setDescription(e.target.value)} 
                    />
                </div>
                <button style={{ backgroundColor: "#f2f2f2",width: "110px", marginLeft: "95px", borderRadius: "5px"}} type="submit">Create</button>
            </form>
            <hr/>
        </div>
    )
}
export default Create;