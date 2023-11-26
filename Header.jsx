import React, { useContext } from 'react'
// import { CartContext } from "../App";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ filterMenu, uniqueHead, onLoginSuccess }) => {
  const role = localStorage.getItem('userRole')
  const onSignOut = () => {
    toast.success('Successfully Sign out', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole')
    onLoginSuccess(false)
  }
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark " >
        <div className="container-fluid nav ">
          <a className="navbar-brand ms-5" href="#" style={{ fontSize: '1.5rem' }}><img src='./favicon.ico'></img>&nbsp;Hospital</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {
            role == 1 &&
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link >
                </li>
                <li className="nav-item">
                  <Link to="/users" className="nav-link active">Users</Link >
                </li>
                <li className="nav-item">
                  <Link to="/Appointments" className="nav-link active">All Appointments</Link >
                </li>



                <li className="nav-item">
                  <span className='cart-icon'>

                    <Link to="" className="nav-link active cart-btn"><i class="fa fa-sign-out " aria-hidden="true" onClick={onSignOut}></i></Link>

                  </span>


                </li>




              </ul>

            </div>}
          {role == 2 &&
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link >
                </li>
                <li className="nav-item">
                  <Link to="/Appointments" className="nav-link active">Appointments</Link >
                </li>



                <li className="nav-item">
                  <span className='cart-icon'>

                    <Link to="" className="nav-link active cart-btn"><i class="fa fa-sign-out " aria-hidden="true" onClick={onSignOut}></i></Link>
                  </span>


                </li>




              </ul>

            </div>}
          {role == 3 &&
            <div className="collapse navbar-collapse " id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link >
                </li>
                <li className="nav-item">
                  <Link to="/bookAppointment" className="nav-link active">Book Appointment</Link >
                </li>
                <li className="nav-item">
                  <Link to="/Appointments" className="nav-link active">Appointments</Link >
                </li>

                <li className="nav-item">
                  <Link to="/AboutUs" className="nav-link active">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactUs" className="nav-link active">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Faq" className="nav-link active">Faq</Link>
                </li>

                <li className="nav-item">
                  <span className='cart-icon'>

                    <Link to="" className="nav-link active cart-btn"><i class="fa fa-sign-out " aria-hidden="true" onClick={onSignOut}></i></Link>
                  </span>


                </li>




              </ul>

            </div>}


        </div>
      </nav>


    </div>
  )
}

export default Header