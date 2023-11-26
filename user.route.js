let UserController =require('../controllers/userControlller.js')
const express = require('express');
const UserRoute = express.Router();

// get all menu data
UserRoute.post('/login',UserController.login)
UserRoute.post('/signup',UserController.signup)
UserRoute.post('/getUserList',UserController.getUserList)
UserRoute.post('/deleteUser',UserController.deleteUser)
UserRoute.post('/updateUser',UserController.updateUser)
UserRoute.post('/getDoctorsList',UserController.getDoctorsList)
UserRoute.post('/setBooking',UserController.setBooking)
UserRoute.post('/getBookingList',UserController.getBookingList)
UserRoute.post('/deleteBooking',UserController.deleteBooking)
UserRoute.post('/updateBooking',UserController.updateBooking)


module.exports = UserRoute;