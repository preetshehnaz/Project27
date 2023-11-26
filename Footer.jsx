import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      
                <div className="container-fluid myfooter " style={{background:'black'}}>
                  {/* <div className="row pt-2" style={{justifyContent:'left'}}>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>Services</h4>
                            <ul className="list-unstyled" style={{justifyContent:'left'}}>

                                <li><Link to="/ "><b  style={{color:'white'}}>Advance Booking</b> </Link></li>
                                <li><Link to="/ "><b  style={{color:'white'}}>Latest News</b> </Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>Contacts deatils</h4>
                            <ul className="list-unstyled" >
                                <li><Link to="/ "><b  style={{color:'white'}}>Contact Us</b> </Link></li>
                                <li><Link to="/ "><b  style={{color:'white'}}>Our story</b> </Link></li>
                               
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 text-light" >
                            <h4 className="h4">Social media</h4>
                            <ul className="list-unstyled">
                                <li>
                                 
                                    <a href="/" target='_blank'> <i className="fa-brands fa-twitter"></i> <b>Twitter</b></a></li>
                                    
                                <li href="/albums">
                                  
                                     <a href="/" target='_blank'> <i className="fa-brands fa-facebook-f"></i> <b>Facebook</b></a></li>
                                <li>
                                   
                               <a href="/" target='_blank'><i className="fa-brands fa-instagram"></i> <b>Instagram</b></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>About Us</h4>
                            <ul className="list-unstyled" >
                                <li><b>Our Story</b></li>
                                <li><b>Terms of Use</b></li>
                                <li><b>Privacy Policy</b></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="row border-top" >
                        <div  className="text-center p-3 text-light" >
                           Copyright 2023 &copy;<Link to="/"><b  style={{color:'blue'}}>www.Hospital.com</b> </Link> All rights reserved!
                        </div>
                    </div>
                </div>
             
    </div>
  )
}

export default Footer