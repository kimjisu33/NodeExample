let http=require('http');

http.createServer(
    function(req, res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write(' <head>');
        res.write(' <title>응답페이지</title><meta charset="UTF-8">');
        res.write(' </head>');
        res.write(' <body>');
        res.write('     <h1>nodeJS로부터의 응답 페이지 : silverlisten-1.js</h1>');
        res.write(' </body>');
        res.write('</html>');
        res.end();
    }
).listen(8080);