import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteBookingApi, getBookingListApi, updateDateApi } from '../api/Api';



const Appointments = () => {
    const [booking, setbooking] = useState([])
    const [appointmentDate, setappointmentDate] = useState()
    const userRole = localStorage.getItem('userRole')
    const userId = localStorage.getItem('userID')
    const dateOfBooking = useRef(null);

    const getBookingList = () => {

        getBookingListApi()
            .then(res => {
                console.log(res, "api getBookingList in compo");
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

                    if (userRole == 1) {
                        setbooking(res.results)

                    }
                    else if (userRole == 3) {
                        setbooking(res.results.filter(ele => ele.userID == userId))
                    }
                    else if (userRole == 2) {
                        setbooking(res.results.filter(ele => ele.docId == userId))
                        console.log(res.results.filter(ele => ele.docId == userId));
                    }

                    
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
    const updateDate = (date,booking) => {

        updateDateApi({ date,booking })
            .then(res => {
                console.log(res, "api change date booking in compo");
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


                    // setbooking(booking.map(booking => booking._id == bookingId));
                    getBookingList();

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
    const deletBooking = (bookingId) => {

        deleteBookingApi({ bookingId })
            .then(res => {
                console.log(res, "api del booking in compo");
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


                    setbooking(booking.filter(booking => booking._id != bookingId));

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



    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this Appointment?");

        if (isConfirmed) {
            deletBooking(id);
        }
    };
 
    const handleDateChange = (e,booking) => {
        const { name, value } = e.target;
        console.log('====================================');
        console.log(value,name,booking);
        console.log('====================================');
        // setappointmentDate(value);

        const isConfirmed = window.confirm("Are you sure you want to change Appointment date?");

        if (isConfirmed) {
            updateDate(value,booking);
        }
    };




    useEffect(() => {
        getBookingList();
     

    }, [])
    return (
        <div className="home-body">
            <h2 className='yello pt-3 mb-5'>Appointment List</h2>

            {
                booking.length != 0 &&

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Sr no.</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>disease</th>
                            <th>Detail</th>
                            <th>Patient History</th>
                            <th>Doctor Name</th>
                            <th>Appointment Date</th>
                            {userRole!=3 && <th>Change Date/Delete</th>}

                        </tr>
                    </thead>
                    <tbody>
                        {booking.map((booking, i) => (
                            <tr key={booking._id}>
                                <td>{i + 1}</td>
                                <td>{booking.fullName}</td>
                                <td>{booking.gender}</td>
                                <td>{booking.department}</td>
                                <td>{booking.reasonToVisit}</td>
                                <td>{booking.patientHistory}</td>
                                <td>{booking.doctorName}</td>
                                <td>{new Date(booking.appointmentDate).toLocaleDateString()}</td>
                                {userRole!=3 && <td >
                                    <div className='Email-container'>

                                       

                                    </div>
                                
                                    <input type="date" name="appointmentDate"  onChange={e=>handleDateChange(e,booking)} ref={dateOfBooking} required style={{width:30,height:30}} />
                                    {/* <i class="fa-solid fa-calendar-days" onClick={() => handleDate(booking._id)}></i> */}
                                    <span>  </span>
                                    <i class="fa-solid fa-trash" onClick={() => handleDelete(booking._id)} style={{marginLeft:10}}></i>
                                </td>}

                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Appointments