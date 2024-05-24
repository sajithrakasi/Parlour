import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>

<img className='fleximage' src='https://www.itl.cat/pngfile/big/206-2064679_2560x1600-beauty-salon-wallpaper-beauty-parlour-images-hd.jpg' alt='...'/>
<div className='signupdiv'>
  <p className='signuptext'>To Book Your Appointment</p>
  <NavLink to={'/Signup'} className='signup'>SignUp</NavLink>
<p className='logintext'>Already User<NavLink to={'/Login'}>Login</NavLink></p>
</div>
<div className='header'>
<h1>Discover Beauty & Wellness at <br></br><span>Divine Beauty Boutique</span></h1>
<p className='paraheading'>
"Welcome to Divine Beauty Boutique, where elegance meets indulgence. Our sanctuary offers bespoke beauty experiences tailored to elevate your natural allure.<br></br> Step into a realm of tranquility and allow our expert team to pamper you with luxurious skincare rituals and rejuvenating spa treatments. Rediscover your inner glow and embark on a journey of self-discovery with us."
</p>
</div>

<div className='cards'>
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-70 w-100">
      <img src="https://i.pinimg.com/originals/bd/ee/24/bdee24ce0116df19565d3d336135b2ed.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-70 w-100">
      <img src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/02/dollyouup_bys-feature.jpg" className="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-70 w-100">
      <img src="https://i.ytimg.com/vi/s8jNdwTVPwY/maxresdefault.jpg" className="card-img-top" alt="..."/>
    </div>
  </div>
 

</div>
</div>
    </div>
  )
}























