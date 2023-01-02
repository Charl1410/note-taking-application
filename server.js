const express = require('express');
const path = require('path');

//setting up port 
const PORT = process.env.PORT || 3001;

//setting up an instance of express
const app = express()
//middleware to say we are dealing with json data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serving up static data from the public folder
app.use(express.static('public'));

//GET route to serve home page
app.get('/', (req, res) =>
res.send(path.join(__dirname, '/public/index.html'))
);

//GET route to serve notes page 
app.get('/notes', (req, res) =>
res.send(path.join(__dirname, '/public/notes.html'))
);
 

app.listen(PORT, () =>
  console.log(`Serving static asset routes at http://localhost:${PORT}`)
);


