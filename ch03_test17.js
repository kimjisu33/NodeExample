function add(a, b, callback){
    let result = a+b;
    callback(result);
    let count=0;
    let history=function(){
        count++;
        return count+' : '+a+' + '+b+' = '+result;
    }
    return history;
}
let history=add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('add(10,10)의 결과 : %d',result);
});

console.log('결과값으로 받은 함수의 실행 결과 : '+history());
console.log('결과값으로 받은 함수의 실행 결과 : '+history());
console.log('결과값으로 받은 함수의 실행 결과 : '+history());