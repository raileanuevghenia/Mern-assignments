import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AuthorsList = (props) => {
    const [authors, setAuthors] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect (() => {
        axios.get("http://localhost:8000/api")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [ formSubmitted ])

    const deleteAuthor = ( authorId ) => {
        axios.delete("http://localhost:8000/api/delete/" + authorId)
            .then(res => {
                console.log("Author deleted")
                setFormSubmitted(!formSubmitted)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className="container" style={{marginLeft: "20px"}}>
                <Link to="/new">Add an author</Link>
                <h5 style={{color: "purple"}}>We have quotes by:</h5>
                <table className="table table-striped table-bordered" style={{width: "350px"}}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Actions available</th>
                        </tr>
                    
                        {
                            authors.map(( author,index ) => (
                                <tr key={ index }>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick={() => navigate ("/edit/" + author._id)} className="btn btn-secondary" style={{marginRight: "15px", width: "90px", height: "35px"}}>Edit</button>
                                        <button onClick={() => {deleteAuthor(author._id)}} className="btn btn-secondary" style={{width: "90px", height: "35px"}}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AuthorsList;