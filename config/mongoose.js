const mongoose =  require('mongoose');

mongoose.connect("mongodb://localhost:27017/url_short", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function(){
    console.log("Successfully connected to MongoDB database");
});

module.exports = db;