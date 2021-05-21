import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'


const ShowAll = () => {
    const [pets, setPets] = useState([])
    const [deleteClicked, setDeleteClicked] = useState([false])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                console.log("hiiii, check out a pet!!")
                setPets(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [deleteClicked])

const deletePet = (e, petId) =>{
    console.log("delete this pet,", petId)
    axios.delete(`http://localhost:8000/api/pets/delete/${petId}`)
        .then (response =>{
            console.log("this pettt is deleted")
            setDeleteClicked(!deleteClicked)
        })
        .catch(err=> console.log(err))
}
    return (
        <div>
            <h1 className="mt-4">Pet Shelter</h1>
    <h3>These pets are looking for a good home</h3>
            {
                pets.map((pet,i) => {
                    return <div key={i} className="card">
                        <div className="card-body">
                            <h4 className="card-title">Name: {pet.name}</h4>
                            <h5 className="card-title">Pet Type: {pet.petType}</h5>
                            <h5 className="card-title">Description: {pet.desc}</h5>
                            <h6>Skills:</h6>
                            <h6 className="card-title">{pet.skills1}</h6>
                            <h6 className="card-title">{pet.skills2}</h6>
                            <h6 className="card-title">{pet.skills3}</h6>
                        <p><button className="btn-primary" onClick={(e) => deletePet(e, pet._id)}>Adopt Pet</button></p>
                        <button className="btn-info"><Link to={`/pets/update/${pet._id}`}>Edit Pet</Link></button>
                        <p><a href={`/pets/${pet._id}`} className="card-link">View Pet Details</a></p>
                    
                        </div>
                    </div>

                })
            }
        </div>
    );
};



export default ShowAll;