import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDoctorsListApi, setBookingApi } from '../api/Api';

const BookAppointment = () => {



    const [DocList, setDocList] = useState([])
    const [profile, setprofile] = useState([])

    const userID = localStorage.getItem('userID')
    const intialState = {
        fullName: '',
        gender: '',
        mobileNumber: '',
        dateOfBirth: '',
        address: '',
        email: '',
        department: '',
        doctorName: '',
        patientHistory: '',
        choosePatient: '',
        reasonToVisit: '',
        appointmentDate: '',
        docId: '',
        userID
    };
    const [formData, setFormData] = useState(intialState);


    var uniqueProfessions = [];


    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);
        if (name == 'doctorName') {
            const [selectedName, selectedId] = value.split('|');
            console.log('====================================');
            console.log(selectedName, selectedId);
            console.log('====================================');
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: selectedName,
                // Add the id to the state as well
                // Note: you might want to convert the id to a number if needed
                docId: selectedId,
            }));
        }
        else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions with the form data here
        console.log('Form Data:', formData);
        setBooking();
        e.target.reset();
        setFormData(intialState);
    };


    const setBooking = () => {

        setBookingApi(formData)
            .then(res => {
                console.log(res, "api setBooking in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });






                }
                else {
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
    const getDoctorsList = () => {

        getDoctorsListApi()
            .then(res => {
                console.log(res, "api getDoctorsList in compo");
                if (res.statusCode == 200) {
                    toast.success(res.message, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setDocList(res.results)
                    uniqueProfessions = Array.from(new Set(res.results.map(item => item.profession)));
                    setprofile(uniqueProfessions)

                    console.log(uniqueProfessions);



                }
                else {
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



    useEffect(() => {
        getDoctorsList();
    }, [])


    return (
        <div className="container-fluid  " style={{ background: "url('./images/hospital.jpg') no-repeat center center/cover" }}>

            <h2 className='brown pt-3' style={{}}>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="bookAppoint-form">

                    <div className='innerBookAppoint' style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
                        <div className='Email-container'>
                            <label>
                                Full Name:
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            </label>
                        </div>

                        <div className='Email-container'>
                            <label>
                                Gender:
                                <div className="custom-select-container">
                                    <select name="gender" value={formData.gender} onChange={handleChange} required style={{ width: '100%' }}>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div className='Email-container'>
                            <label>
                                Mobile Number:
                                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                            </label>
                        </div >

                        <div className='Email-container'>
                            <label>
                                Date of Birth:
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                            </label>
                        </div >

                        <div className='Email-container'>
                            <label>
                                Address:
                                <textarea name="address" value={formData.address} onChange={handleChange} required />
                            </label>
                        </div >

                        <div className='Email-container'>
                            <label>
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </label>
                        </div >


                    </div>
                    <div className='innerBookAppoint' style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
                        <div className='Email-container'>
                            <label>
                                Department:
                                <div className="custom-select-container">
                                    <select name="department" value={formData.department} onChange={handleChange} required style={{ width: '100%' }}>
                                        <option value="" disabled>Select Department</option>
                                        {DocList.length !== 0 && profile.map((ele,i) => (
                                            <option key={i} value={ele}>
                                                {ele}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div >
                        <div className='Email-container'>
                            <label>
                                Doctor Name:
                                <div className="custom-select-container">
                                    <select name="doctorName" value={formData.doctorName} onChange={handleChange} required style={{ width: '100%' }}>
                                        <option value="" disabled>Select a doctor</option>
                                        {DocList.filter(ele => ele.profession === formData.department).map(ele => (
                                            <option key={ele._id} value={`${ele.name}|${ele.docId}`}>
                                                {`${ele.name} (${ele.yearsOfExperience} yrs experience)`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>

                        </div >

                        <div className='radio-container'>
                            <label style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
                                Patient History:


                                <div style={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                    <input type="radio" name="patientHistory" value="yes" onChange={handleChange} style={{ display: 'flex' }} /> Yes




                                    <input type="radio" name="patientHistory" value="no" onChange={handleChange} /> No
                                </div>



                            </label >
                        </div >

                        <div className='radio-container'>
                            <label>
                                Choose Patient:

                                <div style={{ width: '50%', display: 'flex', flexDirection: 'row' }}>
                                    <input type="radio" name="choosePatient" value="existing" onChange={handleChange} /> Existing




                                    <input type="radio" name="choosePatient" value="new" onChange={handleChange} /> New
                                </div>

                            </label >
                        </div >

                        <div className='Email-container'>
                            <label>
                                Reason to Visit:
                                <textarea name="reasonToVisit" value={formData.reasonToVisit} onChange={handleChange} required />
                            </label>
                        </div >

                        <div className='Email-container'>
                            <label>
                                Appointment Date:
                                <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
                            </label>
                        </div >


                    </div>
                </div >
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', width: '80vw', backgroundColor: 'rgba(1, 1, 1, 0.5)', marginBottom: '15px',paddingBottom:'1rem' }}>
                    <button type="submit" style={{ width: '44%', marginRight: '4%' }}>Book Appointment</button>
                </div>
            </form >
        </div >
    );





}

export default BookAppointment