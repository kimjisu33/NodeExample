let http=require('http');
let fs=require('fs');

let server=http.createServer();

let port=3000;
server.listen(port,function(){
    console.log('웹 서버가 시작되었습니다. : %d',port);
});

server.on('connection',function(socket){
    console.log('클라이언트가 접속했습니다. : %s, %d',socket.remoteAddress,socket.remotePort);
});

server.on('request',function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    
    let filename='cat.jpg';
    fs.readFile(filename, function(err,data){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        res.write(data);
        res.end();
    });
});

server.on('close',function(){
    console.log('서버가 종료됩니다.');
});