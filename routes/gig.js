const express  = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');
const router =  express.Router();


router.use('/', (req,res)=>{

    res.send('GIGS');
});

module.exports =router;