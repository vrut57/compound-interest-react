//Imports 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//Router function queries


var router = express.Router();

var db;

//Connect to mongo db. TODO Prompt for user name and password
MongoClient.connect('mongodb://admin:admin@ds157631.mlab.com:57631/compound-interest', (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(3001, function () {
        console.log('listening on 3001');
    });
})

app.get('/', function(rep, res){
    res.send('hello world!');
});

app.use('/api', router);


module.exports = app;
