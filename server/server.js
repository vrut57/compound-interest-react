//Imports 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

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

router.get('/', function (req, res) {
    res.send('hello world!');
});

router.get('/deposits', function(req, res, next){
    db.collection('deposits').find(), (err, result) => {
        if(err) return alert(err);
        console.log('successful get');
        res.send(result);
    };
});

router.post('/deposits', function (req, res, next){
    db.collection('deposits').insertOne({
        user: 'user1',
        unit: 'year',
        deposits: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
        attributes: {attr1: 'test1', attr2: 'test2', attr3: 3}
    }, (error, result) => {
        assert.equal(null, err);
        alert('saved to db');
    })
});

app.use('/api', router);


module.exports = app;

