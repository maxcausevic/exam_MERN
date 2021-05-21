import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router'


const ShowOne = (props) => {
    const [petInfo, setPetInfo] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)
            })
            .catch(err=> console.log(err))
            
    },)
    const deletePet = (e, petId) => {
        console.log("delete this pet", petId)
        axios.delete(`http://localhost:8000/api/pets/delete/${petId}`)
            .then(response => {
                console.log("deleted")
                console.log(response)
                console.log("deleted")
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>{props.id}</h2>
            {petInfo == null ? <h1>no matching pets here</h1> :
                <>
                    <p>Name: {petInfo.name}</p>
                    <p>Pet type: {petInfo.petType} </p>
                    <p>Description: {petInfo.desc}</p>
                    <p>Skills:</p>
                    <p> *{petInfo.skills1}</p>
                    <p> *{petInfo.skills2}</p>
                    <p> *{petInfo.skills3}</p>
                
                    <button onClick={(e) => deletePet(e, petInfo._id)}>Adopt Pet</button>
                </>
            }
        </div>
    );
};



export default ShowOne;