var express = require('express'),
    app = express(),
    engines = require('consolidate');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.send('Hellow World');
});

app.use(function(req, res) {
  res.sendStatus(404);
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express sever listening on port %s', port);
})
