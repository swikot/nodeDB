const express = require('express');
const bodyparse = require('body-parser');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
app.use('/gigs',require('./routes/gig'))
const db = require('./config/database');
  db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  


app.get('/',(req,res)=>{
       res.send("INDEX");
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT,console.log('server started on port :'+PORT));