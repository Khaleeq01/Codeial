const { response } = require('express');
const express = require('express');

const router = express.Router();

console.log('router loaded');

const homeController = require('../controllers/home_controller');

// console.log('router loaded');


router.get('/', homeController.home);

module.exports=router;