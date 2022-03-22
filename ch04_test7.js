let fs=require('fs');

fs.writeFile('./output.txt','Hello World',function(err){
    if(err){
        console.log('Error : '+err);
    }
    console.log('output.txt 파일에 쓰기 완료');
});

console.log('프로젝트 폴더 안의 data를 쓰도록 요청했습니다.');