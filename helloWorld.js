var http = require('http'),
    fs = require('fs'),
    express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));
app.set('views',__dirname+'/views');

app.get('/',function(request, response){  
    response.setHeader('Content-Type','text/html');
    response.render(views/index.ejs);
    response.end();
}).listen(8192);

/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8192);
});*/
console.log('Server running at http://108.228.60.70:8192/');

/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen();*/