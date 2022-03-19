let Person={};

Person['age']=19;
Person.name='김지수';
Person.add=function(a,b){
    return a+b;
}
console.log('더하기 : %d',Person.add(10,10));