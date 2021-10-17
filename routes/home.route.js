const express = require('express');
const homeController = require('../controllers/home.controller');
const route = express.Router();

route.get('/doctors', homeController.indexHome);

module.exports = route;