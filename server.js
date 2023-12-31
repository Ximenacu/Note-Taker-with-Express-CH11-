// npm i express
// To start the server: npm start OR node server.js

const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

const termData = require('./db/db.json');
const uuid = require('./helpers/uuid');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/notes', (req, res) =>
  res.sendFile(path.join( __dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        // Convert string into JSON object
        const parsedReviews = JSON.parse(data);
        res.json(parsedReviews)
        }
    })
);

app.post('/api/notes', (req, res) => {
    // console.log("req.body",req.body);
    let response = {
        title: req.body.title,
        text: req.body.text,
        id: uuid()
    }
    // Check the request body
    if (req.body.title && req.body.text) {
        
    //   response = {status: 'success'};
    //   res.json(`New note: "${req.body.title}" has been added!`);
      
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          // Convert string into JSON object
          const parsedReviews = JSON.parse(data);
          // Add a new review
          parsedReviews.push(response); //here
          // Write updated reviews back to the file
          fs.writeFile('./db/db.json', JSON.stringify(parsedReviews, null, 4), (writeErr) =>
              writeErr ? console.error(writeErr)
              : console.info('Successfully added note!')
              
          );
        }
      });

      res.json(`New note: "${req.body.title}" has been added!`);

    } else {
      res.json('New note must contain a title and a text');
    }    
  }
);

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}`)
);
