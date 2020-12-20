var http = require('http');
var url = require('url'); //built-in module to easily handle query strings

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //tells server to display as HTML
  res.write('Hello World!'); //write a response to the client
  res.write(req.url); //url property holds part of url after the domain name
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080 
