
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server started at port 3000')
});

// used to parse req.body in express -> PUT or POST 
const bodyParser = require('body-parser');

// specifically parse json data and add it to the req.body object
app.use(bodyParser.json());

// Routes :-

// Get Request
app.get('/', (req, res) =>{
    res.send('Kya Haal Chal')
});


// POST Request
app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send('Car Submitted Successfully');
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log('Connection Successful')})
.catch((error) => {console.log("Received an Error")})
