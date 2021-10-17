const express = require('express');
const adminController = require('../controllers/admin.controller');
const route = express.Router();

route.get('/', adminController.indexAdmin);

module.exports = route;