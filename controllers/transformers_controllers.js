var express = require('express');
var router = express.Router();

var transformers = require('../modules/transformers');

router.get('/', function(request, response){
    var mustacheVar = {
        transList: transformers
    }
    response.render('./transformers/index', mustacheVar);
})

router.get('/:id', function(request, response){
    var transId = request.params.id;
    var trans = transformers[transId];
    var mustacheVar = {
        name: trans.name,
        form: trans.form,
        type: trans.form_type,
        team: trans.team,
        photo: trans.photo
    }
    response.render('./transformers/show', mustacheVar);
})

module.exports = router;