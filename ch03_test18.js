function Person(name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.walk=function(speed){
    console.log(speed+'km 속도로 걸어갑니다.');
}
Person.prototype.eat=function(food){
    console.log(food+'를 맛있게 먹습니다.')
}
Person.prototype.live=function(where){
    console.log(where+'에서 살고 있습니다.');
}

let p1=new Person('3206김지수',19);
let p2=new Person('아이유',22);
let p3=new Person('삼다수',100);

console.log(p1.name+' 객체의 walk(10)을 호출 합니다.');
p1.walk(10);
console.log(p1.name+' 객체의 eat("pizza")을 호출 합니다.');
p1.eat('pizza');
console.log(p1.name+' 객체의 live("서울")을 호출 합니다.');
p1.live('서울');