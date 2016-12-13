var express = require('express');
var app = express();
var host = process.env.IP;
var port = process.env.PORT;

app.use(express.static(__dirname + '/app'));
app.use(function(req, res) {
  res.sendFile(__dirname + '/app/bundle.js')
});
app.listen(port, host, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});