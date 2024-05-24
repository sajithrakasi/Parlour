import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[comment,setComment]=useState('')
    const[message,setMessage]=useState(false)
  
    

    const handleSubmit = (e) => {
      e.preventDefault();
     
       if(name===''&&email===''&&comment===''){
        setMessage('enter required fields')
       }else{
        axios.post('http://localhost:3001/contact/post',{name:name,email:email,comment:comment})
        .then(res=>console.log(res))
        setMessage('we will contact soon')
       }

    }

    const changeName=(e)=>{
     setName(e.target.value)
    }
    const changeEmail=(e)=>{
  setEmail(e.target.value)
    }
   
    const changeComment=(e)=>{
    setComment(e.target.value)
    }
  return (
    <div>
      <div className='contact-container-box'>
    <div className='contact-container' >
        <form onSubmit={handleSubmit}>
            <label>Name : </label>
      <input type='text' value={name} placeholder='Enter your name' onChange={changeName}/><br></br><br></br>
      <label>Email : </label>
      <input type='email' value={email} placeholder='Enter your Email' onChange={changeEmail}/><br></br><br></br>
      <label>Comment:</label>
      <textarea value={comment} placeholder='Leave your comment ' onChange={changeComment}/><br></br>
      <button type='submit'>submit</button>
      </form>
<p>{message}</p>

    </div>
</div>
    </div>
  )
}