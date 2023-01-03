const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid')
const notes = require('./db/db.json')

//setting up port 
const PORT = process.env.PORT || 3001;

//setting up an instance of express
const app = express()
//middleware to say we are dealing with json data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serving up static data from the public folder
app.use(express.static('public'));

//GET route to serve home page to the client for the default route
app.get('/', (req, res) =>
res.send(path.join(__dirname, '/public/index.html'))
);

//GET route to serve notes page 
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//this serves the saved notes to the html 
app.get('/api/notes', (req, res) => {
  //returning the reviews in json format from the db 
  res.status(200).json(notes);
});

// post request to add a new note
app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to add a note`);
//destructuring the request body and creating an object 
  const {title, text} = req.body;

  if (title && text) {

    const newNote = {
      title,
      text,
      note_id: uuid(),
    };
  
  const response = {
    status: 'success',
    body: newNote,
  };

  console.log(response);
  res.status(201).json(response);
} else {
  res.status(500).json('Error in posting review');

}

});

 

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}`)
); 


