const adminRoute = require('express').Router();

const {
    login,
}=require('../controllers/adminController');

adminRoute.post('/login',login);


module.exports = adminRoute;