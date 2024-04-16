import React, { useState } from 'react'
import useSignUp from '../../../Hooks/useSighup'

const SignUp = () => {
    const {SignUp} = useSignUp();
    const [data , setData] = useState({
        username:'',
        email:'',
        password:'',
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        SignUp(data);
    }
  return (
    <div>
        <div className="container">
    <h1>SignUp</h1><br/>
    <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input onChange={(e)=>{setData({...data,username:e.target.value})}} type="text" id="username" name="username" placeholder="Enter your username" required className='loginData'/>
        <label htmlFor="number">Phone Number:</label>
        <input type="number" id="number" name="number" placeholder="Enter your number" required className='loginData'/>
        
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=>{setData({...data,email:e.target.value})}} type="email" id="email" name="email" placeholder="Enter your email" required className='loginData'/>
        
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>{setData({...data,password:e.target.value})}} type="password" id="password" name="password" placeholder="Enter your password" required className='loginData'/>
        
        <button type="submit" className='loginData'>SignUp</button>
    </form>
    </div>
      
    </div>
  )
}

export default SignUp