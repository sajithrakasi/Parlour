import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin=()=>{
    if(email===''&&password===''){
      setMessage('enter required fields')
     }else{
      axios.post('http://localhost:3001/auth/signin',{email:email,password:password})
      .then(res=>console.log(res))
      setMessage('verify your email address')
      navigate('/')
     }
    }
  return (
    <div className="login-container" >
      <div className='content'>
        <h2>Login Here</h2>
      </div>
      <div className='login-box'>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <button type='submit'>Login</button>
        </form><br></br>
        {message}
      </div> 
      
    </div>
  );
}