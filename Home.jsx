import React from 'react'
import { Link } from 'react-router-dom'
import Appointments from './Appointments'
import AboutUs from './AboutUs'
const Home = () => {
  return (
    <div className="" >
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">

          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/banner2.jpg" className="d-block w-100 car-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{ textShadow: 'black 2px 2px 5px'}}>Advanced Operation Theaters</h3>
              <p style={{ textShadow: 'black 2px 2px 5px'}}> Our state-of-the-art operation theaters are equipped with cutting-edge technology to ensure precision and safety during medical procedures. Trust us for quality healthcare services</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner3.jpg" className="d-block w-100 car-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{ textShadow: 'black 2px 2px 5px'}} >Emergency Ambulance Service</h3>
              <p style={{ textShadow: 'black 2px 2px 5px'}}>Swift and reliable ambulance services available 24/7. Your health is our priority, and we ensure timely and safe transportation in case of emergencies.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner4.jpg" className="d-block w-100 car-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{ textShadow: 'black 2px 2px 5px'}}>Comfortable Hospital Beds</h3>
              <p style={{ textShadow: 'black 2px 2px 5px'}}>Rest and recover in our state-of-the-art hospital beds designed for your comfort and well-being. Our priority is your peaceful stay.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="./images/banner5.jpg" className="d-block w-100 car-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{ textShadow: 'black 2px 2px 5px'}}>Expert Medical Professionals</h3>
              <p style={{ textShadow: 'black 2px 2px 5px'}}>Meet our team of highly qualified and experienced doctors committed to providing personalized and comprehensive healthcare. Your health is in good hands.</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
      <div className='container-fluid home-body px-auto'>
        <div className='row'>

          <div className="col-md-5 col-xs-12 home-img" ><img src='./images/banner1.jpg' className='' style={{ height: "85vh",width:"45vw" }}></img></div>
          <div className="col-md-7 col-xs-12 home-content pl-10" >
            <h1>Welcome to Our Hospital</h1>
           <div>
           <h3>We are dedicated to providing</h3>
            <h3> quality healthcare services</h3>
           </div>
            <h5>Your Trusted Partner in Health</h5>
            <Link to="/bookAppointment"> <button className="home-btn" >Book Appointment</button></Link></div>

        </div>
      </div>
      <AboutUs/>
    </div>
  )
}

export default Home