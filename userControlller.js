const { sendResponse } = require('./helper');

let UserDetails = require('../models/User');
let DoctorsDetail = require('../models/Doctor');
let Booking = require('../models/Booking');

class UserController {
    static login = async (req, res,) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return sendResponse(res, "Email, and password are required fields'", true, []);


        }
        try {

            const user = await UserDetails.findOne({ email, password });

            if (user) {

                sendResponse(res, "Login successful", null, user);

            } else {


                sendResponse(res, "Invalid email or password", true, []);
            }
        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }

    static signup = async (req, res,) => {

        // role: 1(Admin), 2(Doctor), 3(patient)

        const { name, email, password } = req.body;
        const role = "3";
        if (!name || !email || !password) {
            return sendResponse(res, " 'Name, email, and password are required fields'", true, []);


        }
        try {
            // Check if the email is already registered
            const existingUser = await UserDetails.findOne({ email });

            if (existingUser) {


                sendResponse(res, "Email already registered", true, []);
            } else {

                const newUser = await UserDetails.create({ name, email, password, role });
                if (newUser) {

                    sendResponse(res, "Signup successful", null, newUser);
                } else {
                    sendResponse(res, "couldn't Signup", true, (req.body));

                }
            }
        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }



    static getUserList = async (req, res,) => {


        try {

            const userList = await UserDetails.find({});
            if (userList) {

                sendResponse(res, "All User List", null, (userList));
            } else {
                sendResponse(res, "couldn't find any user", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }


    static deleteUser = async (req, res,) => {

        const { userId } = req.body;

        if (!userId) {
            return sendResponse(res, " userId  required field'", true, []);


        }
        try {

            const deletedUser = await UserDetails.findByIdAndDelete(userId);
            if (deletedUser) {

                sendResponse(res, `"${deletedUser.name}" user deleted`, null, (deletedUser));
            } else {
                sendResponse(res, "couldnt find user", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }


    static updateUser = async (req, res,) => {

        const { userId, email, name, role, profession, description, yearsOfExperience } = req.body;
        const updatedUserData = {
            email,
            name,
            role
        };



        if (role === '2') {
            updatedUserData.profession = profession;
            updatedUserData.description = description;
            updatedUserData.yearsOfExperience = yearsOfExperience;
        }

        console.log('====================================');
        console.log(updatedUserData);
        console.log('====================================');

        if (!userId || !name || !email || !role) {
            return sendResponse(res, " userId,role,name,email  required field'", true, []);


        }
        try {

            const updatedUser = await UserDetails.findByIdAndUpdate(userId, updatedUserData, { new: true });
            if (updatedUser) {
                if (role === '2') {
                    const doctorDetails = {
                        userId,
                        profession,
                        description,
                        yearsOfExperience,
                        isActive: "1"
                    };
                    await DoctorsDetail.findOneAndUpdate({ userId }, doctorDetails, { upsert: true, new: true });
                }
                else if (role === '1' || role === '3') {
                    const doctorDetails = {
                        userId,
                        isActive: "0",
                    };
                    await DoctorsDetail.findOneAndUpdate({ userId }, doctorDetails, { upsert: true, new: true });
                }

                sendResponse(res, `"${updatedUser.name}" user Updated`, null, (updatedUser));
            } else {
                sendResponse(res, "couldnt find user", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }




    static getDoctorsList = async (req, res,) => {




        try {
            const activeDoctors = await DoctorsDetail.aggregate([
                {
                    $match: { isActive: "1" }
                },
                {
                    $lookup: {
                        from: "userDetails", // Collection name for UserDetails
                        localField: "userId",
                        foreignField: "_id",
                        as: "userDetails"
                    }
                },
                {
                    $unwind: "$userDetails"
                },
                {
                    $project: {
                        _id: 1,
                        description: 1,
                        profession: 1,
                        yearsOfExperience: 1,
                        isActive: 1,
                        name: "$userDetails.name",
                        email: "$userDetails.email",
                        docId: "$userDetails._id"

                    }
                }
            ]);
            console.log('====================================');
            console.log('Active Doctors:', activeDoctors);
            console.log('====================================');

            if (activeDoctors.length > 0) {

                sendResponse(res, "All Doctors List", null, (activeDoctors));
            } else {
                sendResponse(res, "couldn't find any Doctors", true, {});

            }

            // console.log(activeDoctors);
            // return activeDoctors;
        } catch (error) {
            res.status(500).json({ message: 'Error occurred', error, code: 500 });

        }
    }

    static setBooking = async (req, res,) => {



        // console.log('====================================');
        // console.log(req.body);
        // console.log('====================================');

        // return;

        try {


            const {
                doctorName,
                address,
                appointmentDate,
                choosePatient,
                dateOfBirth,
                department,
                docId,
                email,
                fullName,
                gender,
                mobileNumber,
                patientHistory,
                reasonToVisit,
                userID
            } = req.body;

            // Create a new Booking document
            const newBooking = await Booking.create({
                doctorName,
                address,
                appointmentDate: new Date(appointmentDate),
                choosePatient,
                dateOfBirth: new Date(dateOfBirth),
                department,
                docId,
                email,
                fullName,
                gender,
                mobileNumber,
                patientHistory,
                reasonToVisit,
                userID
            });

            sendResponse(res, "Appointment Booked", null, newBooking);
        } catch (error) {
            console.error('Error adding appointment:', error);
            sendResponse(res, "Error adding appointment", true, null);
        }


    }

    static getBookingList = async (req, res,) => {


        try {

            const bookings = await Booking.find({});
            if (bookings) {

                sendResponse(res, "Allbooking", null, (bookings));
            } else {
                sendResponse(res, "couldn't find any booking", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }
    static deleteBooking = async (req, res,) => {

        const { bookingId } = req.body;

        if (!bookingId) {
            return sendResponse(res, " bookingId  required field'", true, []);


        }
        try {

            const deletedUser = await Booking.findByIdAndDelete(bookingId);
            if (deletedUser) {

                sendResponse(res, `Appointment deleted`, null, (deletedUser));
            } else {
                sendResponse(res, "couldnt find Appointment", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }

    static updateBooking = async (req, res,) => {
        const { date,booking} = req.body;

        if (!date || !booking ) {
            return sendResponse(res, " date,booking required field'", true, []);


        }
        
        const updatedUserData = {
            appointmentDate:new Date(req.body.date)
        };
        const BookId=booking._id
        
        try {

            const booking = await Booking.findByIdAndUpdate(BookId, updatedUserData, { new: true });
            if (booking) {
               

                sendResponse(res, ` Date Updated`, null, (booking));
            } else {
                sendResponse(res, "couldnt booking", true, {});

            }

        } catch (error) {
            // Error handling
            res.status(500).json({ message: 'Error occurred', error, code: 500 });
        }
    }
}





module.exports = UserController;