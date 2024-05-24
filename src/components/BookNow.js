import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
export default function OrderConfirm() {
  const auth=useAuth()
    const[email,setEmail]=useState("")
    const[contact,setContact]=useState("")
    const[events,setEvents]=useState("")
    const[eventDate,setEventDate]=useState("")

  const navigate = useNavigate()

    const handleSubmit = (e)=>{
      e.preventDefault()
        axios.post('http://localhost:3001/users/post',{
          name:auth.user,email,contact,events,eventDate
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        alert("your appointment is booked")
       navigate('/')
      }
  return (
    <div id="book">
     <div id="form-box">
       <form id="form-id" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br><br></br>
        <label>Contact:</label>
        <input type="number"value={contact} onChange={(e)=>setContact(e.target.value)}></input><br></br><br></br>
        <label>Events:</label>
        <select value={events} onChange={(e)=>setEvents(e.target.value)}>
            <option value="select">Category</option>
            <option value="marraige">Makeup</option>
            <option value="birthday">HairStyle</option>
            <option value="social">Saree Drapping</option>
           
        </select><br></br><br></br>
        <label>Date:</label>
        <input type="date" value={eventDate} onChange={(e)=>setEventDate(e.target.value)}></input><br></br><br></br>
         <button type="submit">Book Now</button>
       
       </form>
       </div>
    </div>
    
  )
}