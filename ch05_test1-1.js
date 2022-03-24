let http=require('http');

let server=http.createServer();

let host='172.30.1.56';
let port=3000;

server.listen(port, host,'50000', function(){
    console.log('웹 서버가 시작되었습니다. ->'+host+' : %d',port);
});