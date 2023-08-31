import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Signin(props){
    const navigator = useNavigate()


    const signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempUser = { ...props.user };
        tempUser[name] = value;
        props.setUser(tempUser);
    };
    

    const signInSubmitHandler = () => {
        axios.post("http://localhost:8080/signin", props.user)
          .then((response) => {
            localStorage.setItem("userId", response.data.id)
            props.setUser(response.data)
            navigator("/")
          })
          .catch((e) => {
            console.log(e)
          })
        }
return(
<section className='background'>

<div className='flex-row justify-content-left'>
EMAIL
<input className='input-container' value={props.user.email} name='email' type='email' onChange={(signInChangeHandler)} ></input>
</div>
<div className='flex-row justify-content-left'>
PASSWORD
<input className='input-container'value={props.user.password} name='password' type='password' onChange={signInChangeHandler}></input>
</div>

<Button variant ="primary" onClick={signInSubmitHandler}>Signin</Button>
<div className='flex-row justify-content-left'>

</div>





</section>



)
}

export default Signin;