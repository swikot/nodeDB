const express  = require('express');
const db = require('../config/database');
const Gig = require('../models/Gig');
const router =  express.Router();


router.use('/', (req,res)=>{

    Gig.findAll()
    .then(gigs=>{ console.log(gigs);
        res.sendStatus(200);
    }
         
    ).catch(err => console.log(err)
    )
    
});

module.exports =router;