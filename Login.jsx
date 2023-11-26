import React, { useState } from 'react';
import { loginApi, singupApi } from '../api/Api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [formDataSignup, setFormDataSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    const [formErrorsSignUp, setFormErrorsSignUp] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [ShowLoginform, setShowLoginform] = useState(true);
    
    const validateForm = () => {
        let isValid = true;
        const updatedErrors = {};

        // Validate email
        if (!formData.email) {
            updatedErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            updatedErrors.email = 'Invalid email format.';
            isValid = false;
        }

        // Validate password
        if (!formData.password) {
            updatedErrors.password = 'Password is required.';
            isValid = false;
        } 
        // else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
        //     updatedErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        //     isValid = false;
        // }

        setFormErrors(updatedErrors);
        return isValid;
    };
    const validateFormSignUp = () => {
        let isValid = true;
        const updatedErrorsSignUp = {};

        // Validate email
        if (!formDataSignup.name) {
            updatedErrorsSignUp.name = 'Name is required.';
            isValid = false;
        } else if (!/^[A-Za-z]{3,}$/.test(formDataSignup.name)) {
            updatedErrorsSignUp.name = 'Minimum 3 aplha';
            isValid = false;
        }
        if (!formDataSignup.email) {
            updatedErrorsSignUp.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formDataSignup.email)) {
            updatedErrorsSignUp.email = 'Invalid email format.';
            isValid = false;
        }

        // Validate password
        if (!formDataSignup.password) {
            updatedErrorsSignUp.password = 'Password is required.';
            isValid = false;
        } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!_])[A-Za-z\d@#$%^&+=!_]{8,}$/.test(formDataSignup.password)) {
            updatedErrorsSignUp.password = 'Password must be at least 8 characters long and contain at least one letter and one number.';
            isValid = false;
        }
        if (!formDataSignup.confirmPassword) {
            updatedErrorsSignUp.confirmPassword = 'Password is required.';
            isValid = false;
        } else if (formDataSignup.password !== formDataSignup.confirmPassword) {
            updatedErrorsSignUp.confirmPassword = 'Passwords do not match.';
            isValid = false;
        }

        setFormErrorsSignUp(updatedErrorsSignUp);
        return isValid;
    };




    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        // Clear the error message if user starts typing again
        setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: '' }));
    };

    const handleChangeSignUp = (event) => {
        const { name, value } = event.target;
        setFormDataSignup((prevFormData) => ({ ...prevFormData, [name]: value }));

        // Clear the error message if user starts typing again
        setFormErrorsSignUp((prevFormErrors) => ({ ...prevFormErrors, [name]: '' }));
    };





    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            login();

        } else {
            console.log('Login failed due to form errors.');
        }
    };
    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        if (validateFormSignUp()) {
           singup();
        } else {
            console.log('Login failed due to form errors.');
        }
    };




    const handleSignUpClick = () => {
        setShowLoginform(false);
    };
    const handleLoginInClick = () => {
        setShowLoginform(true);
    };




    const login = () => {
        let Data = {
            "email": formData.email,
            "password": formData.password
        }


        loginApi(Data)
            .then(res => {
                console.log(res, "api login in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                   
                        localStorage.setItem("userRole",res.results.role)
                        localStorage.setItem("userID",res.results._id)
                    
                    onLoginSuccess(true);
                }
                else{
                    toast.error(res.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
            )
            .catch((error) => {
                console.error('Error fetching data in component:', error);
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    };
    const singup = () => {
        let Data ={
            "email": formDataSignup.email,
            "password": formDataSignup.password,
            "name": formDataSignup.name
          }
          singupApi(Data)
          .then(res => {
              console.log(res, "api signup in compo");
              if (res.statusCode == 200) {
                toast.success(res.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                toast.success('Logged in', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                onLoginSuccess(true);
                localStorage.setItem("userRole",'3')
                  
              }
              else{
                toast.error(res.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
          }
          )
          .catch((error) => {
              console.error('Error fetching data in component:', error);
              toast.error(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
          })
    };

    return (
        <div className="container-fluid  login" style={{ background: "url('./images/hospital.jpg') no-repeat center center/cover" }}>
           
            <h2 className='brown pt-3' style={{backgroundColor: 'rgba(1, 1, 1, 0.8)',padding:'1rem',width: '30vw'}}>Hospital Management</h2>
            {/* <h2 className='yello pt-3' style={{marginBottom:'1rem'}}>Login</h2> */}
            {
                (ShowLoginform)
                    ?
                    <form onSubmit={handleSubmit}  >
                        <div className="Login-form">

                            <div className='Email-container'>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                            </div>

                            <div className='Email-container'>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {formErrors.password && <span className="error">{formErrors.password}</span>}
                            </div>

                            <div className="button-container">
                                <hr />
                                <button type="submit" >Login</button>
                                <p>Don't have an account? <p onClick={handleSignUpClick} className='yello'>Sign up!</p></p>

                            </div>
                        </div>
                    </form>
                    :
                    <form onSubmit={handleSubmitSignUp}  >
                        <div className="Login-form">

                            <div className='Email-container'>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formDataSignup.name}
                                    onChange={handleChangeSignUp}
                                />
                                {formErrorsSignUp.name && <span className="error">{formErrorsSignUp.name}</span>}
                            </div>
                            <div className='Email-container'>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formDataSignup.email}
                                    onChange={handleChangeSignUp}
                                />
                                {formErrorsSignUp.email && <span className="error">{formErrorsSignUp.email}</span>}
                            </div>

                            <div className='Email-container'>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formDataSignup.password}
                                    onChange={handleChangeSignUp}
                                />
                                {formErrorsSignUp.password && <span className="error">{formErrorsSignUp.password}</span>}
                            </div>
                            <div className='Email-container'>
                                <label>Confirm Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formDataSignup.confirmPassword}
                                    onChange={handleChangeSignUp}
                                />
                                {formErrorsSignUp.confirmPassword && <span className="error">{formErrorsSignUp.confirmPassword}</span>}
                            </div>

                            <div className="button-container">
                                <hr />
                                <button type="submit" >Create Account</button>
                                <p>Already have an account? <p onClick={handleLoginInClick} className='yello'>Log in!</p></p>
                            </div>
                        </div>
                    </form>
            }
        </div>
    );
};

export default LoginForm;