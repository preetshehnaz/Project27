import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginForm from './Components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  // State variable to manage login status
  const initialLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginStatus);
  // Function to handle successful login
  const handleLoginSuccess = (loginStatus) => {
    setIsLoggedIn(loginStatus);
    localStorage.setItem('isLoggedIn', loginStatus);
  };

  return (
    <React.StrictMode>
       <ToastContainer />
      {/* If user is not logged in, show login form */}
      {!isLoggedIn && <LoginForm onLoginSuccess={handleLoginSuccess} />}

      {/* If user is logged in, show the main application */}
      {isLoggedIn && <App onLoginSuccess={handleLoginSuccess}/>}
    </React.StrictMode>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
