//Activity Name: secondexpress.js
//Author Name: Mora, John Rubin C.
//Section and Code: WD - 202 / 2083

var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('You have successfully created your second app!');
})

var server = app.listen(2001, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})