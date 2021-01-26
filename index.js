const express = require('express');
const app = express();
const port = 8000;
const db  = require('./config/mongoose');
const ShortUrl  = require('./models/shortUrl');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render('index', {shortUrls: shortUrls});
})

app.post('/shortUrls', async (re1, res) => {
    await ShortUrl.create({full : req.body.fullURL});

    res.redirect('/');
})
app.listen(port, function(err){
    if(err){
        console.log(`Error in running server ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})