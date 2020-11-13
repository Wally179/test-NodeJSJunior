var express = require('express');  
var app=express();  
app.get('/clientes', function (req, res) {  
res.send('<p>Name: ' + req.query['fname']+'</p><p>Lastname: '+req.query['lname']+'</p><p>Email: '+req.query['email']+'</p><p>Phone: '+req.query['phone']+'</p><p>Language:'+req.query['language']+'</p><p>Countrys: '+req.query['country']+'</p><p>Address 1: '+req.query['address']+'</p><p>Address 2: '+req.query['address2']+'</p><p>Cities: '+req.query['cities']+'</p><p>State: '+req.query['state']+'</p><p>Zip Code: '+req.query['zip']+'</p><p>Address Billing: '+req.query['addressb']+'</p><p>Address Billing 2: '+req.query['address2']+'</p><p>Cities Billing: '+req.query['cities2']+'</p><p>States Billing: '+req.query['state2']+'</p><p>ZIP Code Billing: '+req.query['zip2']+'</p><p>Checkbox 1: '+req.query['check1']+'</p><p>Checkbox 2: '+req.query['check2']+'</p><p>Checkbox 3: '+req.query['check3']+'</p><p>Checkbox 4: '+req.query['check4']+'</p><p>Trackers: '+req.query['many']);  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  