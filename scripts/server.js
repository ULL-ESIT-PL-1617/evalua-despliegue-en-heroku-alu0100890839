var express = require('express')
var app = express()
var path = require('path');

app.use(express.static('gh-pages'));
app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})
