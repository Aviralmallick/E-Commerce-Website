import React from 'react'
import { useState } from 'react'
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {
    const[LoginSelected,SetLoginSelected]= useState(true);
  return (
    <div className='box'>
        {LoginSelected?<Login/>:<Signup/>}

        <button onClick={()=>{SetLoginSelected(true)}}>Login</button>
        <button onClick={()=>{SetLoginSelected(false)}}>SignUp</button>
    </div>
  )
}

export default Auth