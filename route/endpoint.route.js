const express = require('express');
const router = express.Router();
const endController = require('../controller/endpoint.controller');
router.get('/',endController.response);


module.exports= router;