import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { Paper } from '@material-ui/core';

const CreateAuthor = (props) => {
    const [ name, setName] = useState("");
    const [ errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new' , {
            name
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors)
                }
                else{
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    const styles = {
        paper: {
            width: "23rem", 
            padding: "2rem",
            margin: "2rem",
            border: "1px solid black"
        },
}
return (
    <div>
        <div style={{marginLeft: "30px"}}>
            <Link style= {{ color: "blue"}} to="/">Home</Link>
            <h5 style={{color: "purple"}}>Add a new author:</h5>
        </div>
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <h5 className="text-danger">{errors.name ? errors.name.message: ""}</h5>
                    <label>Name:</label>
                    <input  type="text" value={ name } onChange= {(e) => setName(e.target.value)} className="form-control"/>
                </div><br/>
                <button className="btn btn-primary" style={{marginRight: "10px", width: "100px"}} onClick={() => navigate("/")}><strong>Cancel</strong></button>
                <button type="submit" className="btn btn-primary" style={{width: "100px"}}><strong> Submit</strong></button>
            </form>
        </Paper>
    </div>
    )
}

export default CreateAuthor;