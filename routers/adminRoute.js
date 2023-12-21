const adminRoute = require('express').Router();

const {
    login,
    getAllCourses,
    addCourse,
    deleteCourse,
    editCourse,
    courseById
}=require('../controllers/adminController');

adminRoute.post('/login',login);
adminRoute.get('/allCourses',getAllCourses);
adminRoute.post('/addCourse',addCourse);
adminRoute.post('/updateCourse',editCourse);
adminRoute.get('/deleteCourse',deleteCourse);
adminRoute.get('/courseById',courseById);


module.exports = adminRoute;