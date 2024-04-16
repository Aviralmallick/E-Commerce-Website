import React, { useState } from 'react'
import "./Login.css";
import useLogin from '../../../Hooks/useLogin';

const Login = () => {
    const [data , setData] = useState({
       
        email:'',
        password:'',
    })
    const {loading,error,login} = useLogin();
    const handleSubmit = (e)=>{
        e.preventDefault();
        login(data);
    }
  return (
  
    <div className="container">
    <h1 className='loginData' id='loginh1'>Login</h1>
    <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=>{setData({...data,email:e.target.value})}} type="email" id="email" name="email" placeholder="Enter your email" required className='loginData'/>
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>{setData({...data,password:e.target.value})}} type="password" id="password" name="password" placeholder="Enter your password" required className='loginData'/>
        <a href="">Forget password?</a>
        <button type="submit" className='loginData'>Login</button>
        
    </form>
    </div>
  )
}

export default Login