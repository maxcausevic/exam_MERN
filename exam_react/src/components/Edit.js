import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'



const Edit = (props) => {
    const [petInfo, setPetInfo] = useState({
        name: "",
        petType: "",
        desc: "",
        skills: ""
    })
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(response=>{
                console.log(response)
                setPetInfo(response.data.results)
            })
            .catch(err=>console.log(err))
    }, [])
    const ChangeHandler = (e) => {
        console.log("changing the input")
        console.log(e.target.name)
        setPetInfo({
            ...petInfo,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`,petInfo)
            .then(res=>{
            console.log(res)
            if(res.data.results){
                navigate("/")
            }
            else{
                setErrors(res.data.errors)
            }
            })
            .catch(err=>console.log(err))
    }
    return (
        <>
        <h1>Edit Pet Details</h1>
        <form onSubmit={onSubmitHandler}>
        <p>
            <label>Name</label><br/>
            <input type="text" onChange={ChangeHandler} name ="name" value={petInfo.name}/> 
        </p>
        <p style = {{color:"red"}}>{errors.name? errors.name.message :""}</p>
        <p>
            <label>Pet Type</label><br/>
            <input type="text" onChange={ChangeHandler} name ="petType" value={petInfo.petType}/>
        </p>
        <p style = {{color:"red"}}>{errors.petType? errors.petType.message :""}</p>
        <p>
            <label>Description</label><br/>
            <input type="text" onChange={ChangeHandler} name ="desc" value={petInfo.desc}/>
        </p>
        <p style = {{color:"red"}}>{errors.desc? errors.desc.message :""}</p>
        <p>
            <label>Skills</label><br/>
            <input type="text" onChange={ChangeHandler} name ="skills1" value={petInfo.skills1}/>
        </p>
    
        <p>
            <label>Skills</label><br/>
            <input type="text" onChange={ChangeHandler} name ="skills2" value={petInfo.skills2}/>
        </p>
        
        <p>
            <label>Skills</label><br/>
            <input type="text" onChange={ChangeHandler} name ="skills3" value={petInfo.skills3}/>
        </p>
        
        

        <input type="submit"/>
    </form>
    </>
    );
};



export default Edit;