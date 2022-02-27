//Activity Name: server-post.js
//Author Name: Mora, John Rubin C.
//Section and Code: WD - 202 / 2083

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.html', function (req, res){
    res.sendFile( __dirname + "/" + "index-post.html" );
})

app.post('/process_post', urlencodedParser, function (req, res){
    //Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen (5000, 'localhost', function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})