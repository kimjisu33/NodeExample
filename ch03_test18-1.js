function Person(name, age){
    this.name=name;
    this.age=age;
}

Person.prototype.wear=function(clothes){
    console.log(this.name+'는 '+clothes+'을 입고 있습니다.');
}
Person.prototype.study=function(subject){
    console.log(this.name+'는 '+subject+'을 배우고 있습니다.')
}
Person.prototype.live=function(where){
    console.log(this.name+'는 '+where+'에서 살고 있습니다.');
}

let p1=new Person('3206김지수',19);
let p2=new Person('3200삼다수',22);
let p3=new Person('3200야자수',23);

console.log(p1.name+' 객체의 wear("교복")을 호출 합니다.');
p1.wear('교복');
console.log(p1.name+' 객체의 live("서울")을 호출 합니다.');
p1.live('서울');
console.log(p2.name+' 객체의 live("제주도")을 호출 합니다.');
p2.live('제주도');
console.log(p3.name+' 객체의 study("수학")을 호출 합니다.');
p3.study('수학');