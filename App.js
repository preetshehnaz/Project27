import React, { useState, createContext, } from 'react'
import './style.css'
import './Components/style.css'
import Loader from "react-js-loader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import AdminPanel from './Components/AdminPanel';
import Home from './Components/Home';
import Users from './Components/Users';
import BookAppointment from './Components/BookAppointment';
import Appointments from './Components/Appointments';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Faq from './Components/Faq';



const App = ({ onLoginSuccess }) => {

  const [Isloading, setIsloading] = useState(false);
  const role = localStorage.getItem('userRole')


  return (
    <div>
      {
        (Isloading) ?
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
            <div style={{ display: 'flex', flexDirection: "column" }}>
              <Loader type="spinner-cub" bgColor={"red"} title={"box-rotate-x"} color={'black'} size={100} />
              <button style={{ backgroundColor: "black", width: 100 }} onClick={() => {
                localStorage.removeItem('isLoggedIn');
                onLoginSuccess(false)
              }}> Signout</button>
            </div>
          </div>
          :

          <Router>
            <Header onLoginSuccess={onLoginSuccess} />


            <Routes>
              {role == 1 && <Route exact path='/' element={<Home />}></Route>}
              {role == 2 && <Route exact path='/' element={<Home />}></Route>}
              {role == 3 && <Route exact path='/' element={<Home />}></Route>}

              <Route exact path='/users' element={<Users />}></Route>
              <Route exact path='/bookAppointment' element={<BookAppointment />}></Route>
              <Route exact path='/Appointments' element={<Appointments />}></Route>
              <Route exact path='/AboutUs' element={<AboutUs />}></Route>
              <Route exact path='/ContactUs' element={<ContactUs />}></Route>
              <Route exact path='/Faq' element={<Faq />}></Route>









            </Routes>
            <Footer />
          </Router>

      }

    </div>
  )
}

export default App
