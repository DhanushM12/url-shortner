const express = require('express');
const app = express();
const port = 8000;
const db  = require('./config/mongoose');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})