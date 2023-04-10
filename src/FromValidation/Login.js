import React, { useState } from "react";
import "./validation.css";

function Login() {
    const [user, setUser]=useState("");
    const [password, setPassword]=useState("");
    const [userErr, setUserErr]=useState(false);
    const [passErr, setPassErr]=useState(false);

    function LoginHandle(e){
        if(user.length<3 || password.length<3)
        {
            alert("type correct value")
        }
        else{
            alert("All Good :)")
        }
       // alert("Hello")
        e.preventDefault()
    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setUser(item)
        // console.warn(e.target.value.length)
    }
    function userHandler(e){
        let item = e.target.value;
        if(item.length<3)
        {
            setUserErr(true)
        }
        else
        {
            setUserErr(false)
        }
        setPassword(item)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={LoginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr?<span>User Not Valid</span>:""}
                <br></br>
                <input type="password" placeholder="Enter User Password" onChange={userHandler} /> {passErr?<span>Password Not Valid</span>:""}
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;