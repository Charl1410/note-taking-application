const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid')

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

//post request to add a new note
app.post('/api/notes', (req, res => {
  console.info(`${req.method} request received to add a review`);
  const {title, text } = req.body;

  if (title && text) {

    const newNote = {
      title,
      text
    }
  }
  
}))

 

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}`)
); 


