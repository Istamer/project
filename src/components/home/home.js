import React from "react";
import "./home.css"

const Home = ({setLoginUser, User}) =>{
    return(
        <div className="home">
            <h1>Hello it's {User.name} homepage</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Home