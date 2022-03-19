let Person={};

Person['age']=19;
Person['name']="김지수";
Person.mobile='010-4064-5380';

console.log('나이 : %d', Person.age);
console.log('나이 : %d', Person['age']);
console.log('이름 : %s', Person.name);
console.log('이름 : %s', Person['name']);
console.log('전화 : %s', Person.mobile);
console.log('전화 : %s', Person['mobile']);