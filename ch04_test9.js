let fs=require('fs');

fs.open('./output.txt','r',function(err,fd){
    if(err) throw err;

    let buf=new Buffer.alloc(10);
    console.log('버퍼 타입 : ',Buffer.isBuffer(buf));

    fs.read(fd,buf,0,buf.length,null,function(err,bytesRead,buffer){
        if(err)throw err;
        let inStr=buffer.toString('utf-8',0,bytesRead);
        console.log('파일에서 읽은 데이터 : %s',inStr);
        console.log(err,bytesRead,buffer);
        fs.close(fd,function(){
            console.log('output.txt파일 열고 읽기 완료');
        });
    });
});