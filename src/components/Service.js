import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../images/eyelash_PNG61-removebg-preview.png'

export default function Service() {
  return (
    <div>
      <div className='service-container'>
        <div className='heading'>   
        <h2 className='sub-title'>Divine Beauty Boutique</h2>
<h1 className='title'>Our Services <img src={image1} alt='...'/> </h1>
<h2 className='line'>___</h2>
</div>
</div>

<div className='header1'>
<h3>Facial</h3>
<div className='cards-container'>
  
<div class="card" style={{width: '18rem'}}>
  <img src="https://www.fabhow.com/wp-content/uploads/2018/07/face-mask-for-sensitive-skin-intro.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i.pinimg.com/originals/89/e0/60/89e06082d185c93baa2d192df6304bbe.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i5.walmartimages.com/asr/8dfb3f6a-0b73-4d1b-b0e9-a01d142c3fab_1.f20c493783ad23bf92103fa29ff80512.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i.ebayimg.com/00/s/MTA4MFgxMDgw/z/D-YAAOSwDsZaxJ02/$_57.PNG?set_id=8800005007" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>

</div>

</div>
<div className='header1'>
<h3>Hair Styles</h3>
<div className='cards-container'>
  
<div class="card" style={{width: '18rem'}}>
  <img src="https://i.pinimg.com/originals/6a/8b/60/6a8b60bbe23227e558c4e2b66c511ac4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i.pinimg.com/736x/1c/07/3e/1c073e1048eb22850c185e78a0522d00.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i1.wp.com/www.hadviser.com/wp-content/uploads/2019/01/38-long-layered-hairstyle-BiCoUxFALnb.jpg?resize=997,1190&ssl=1" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>
<div class="card" style={{width: '18rem'}}>
  <img src="https://i.pinimg.com/originals/ff/f4/15/fff4155426a5a756215c2c6a708bb19e.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <NavLink to={'/BookNow'} className='signup'>Book Now</NavLink>
</div>

</div>

</div>


    </div>
  )
}
