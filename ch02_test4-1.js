let calc=require('./calc');

console.log('방법1 : 모듈로 분리한 후 - calc.add 함수 호출 결과 : %d',calc.add(100,100));



let calc2=require('./calc2');
console.log('방법2 : 모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d',calc2.add(100,150));