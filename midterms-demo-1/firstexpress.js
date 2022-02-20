//Activity Name: firstexpress.js
//Author Name: Mora, John Rubin C.
//Section and Code: WD - 202 / 2083

var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("Hello World!");
})

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
})