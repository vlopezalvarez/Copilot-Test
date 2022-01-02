// Express server on port 3000
var express = require('express');
var app = express();
var server = app.listen(3000);

// Returns the current date and time
app.get('/', function (req, res) {
    var date = new Date();
    res.send(date.toString());
}

