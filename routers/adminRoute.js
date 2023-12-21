const adminRoute = require('express').Router();

const {
    login,
    getAllCourses,
    addCourse
}=require('../controllers/adminController');

adminRoute.post('/login',login);
adminRoute.get('/allCourses',getAllCourses);
adminRoute.post('/addCourse',addCourse);


module.exports = adminRoute;