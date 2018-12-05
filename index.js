var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;
var transController = require('./controllers/transformers_controllers');

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.get('/', function(request, response){
    response.render('./index');
})

app.use('/transformers', transController)

app.listen(port, function(){
    console.log('Hey');
})


