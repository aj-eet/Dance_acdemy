const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 80;
const app = express();

//EXPRESS SPECIFIC STUFF 

app.use('/static', express.static('static'));//for serving static  file


//PUG SPECIFIC STUFF 

app.set('view engine', 'pug');//setting template engine as pug
app.set('views', path.join(__dirname, 'views'));//setting the views directory

//ENDPOINTS 
app.get('/', (req, res) => {
 
  res.status(200).render('index.pug')
});

app.get('/contact', (req, res) => {
 
  res.status(200).render('contact.pug')
});
// app.get('/home', (req, res) => {
 
//   res.status(200).render('home.pug')
// });
app.get('/service', (req, res) => {
 
  res.status(200).render('service.pug')
});
app.get('/about', (req, res) => {
 
  res.status(200).render('about.pug')
});

//START THE SERVER 

app.listen(port, () => {
  console.log(`the application started successfully on http://${'127.0.0.1'}:${port}`);
});
