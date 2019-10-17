const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController'); 
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController'); 
const BookingConctroller = require('./controllers/BookingController');
 

 
const routes = express.Router();
const upload = multer(uploadConfig);
   
routes.post('/session', SessionController.store); 

routes.get('/spots', SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show); 
 
routes.post('/spots/:spot_id/booking',BookingConctroller.store);

module.exports = routes;