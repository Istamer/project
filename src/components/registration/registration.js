import React, {useState} from "react";
import "./registration.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Registration = () =>{

    const navigate = useNavigate()

    const [user, setUser] =  useState({
        name: "",
        email: "",
        password: "",
        rePassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const registration = () =>{
        const {name, email, password, rePassword} = user
        if (name && email && password && (password === rePassword)){
            axios.post("http://localhost:5000/registration", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login")
                })
        }else {
            alert("invalid input")
        }
    }

    return(
        <div className="registration">
            {console.log("User", user)}
            <h1>Registration</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={ handleChange }></input>
            <input type="password" name="rePassword" value={user.rePassword} placeholder="Enter your password one more time" onChange={ handleChange }></input>
            <div className="button" onClick={registration}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Registration