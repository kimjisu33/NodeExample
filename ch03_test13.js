let Users=[{name:'방탄소년단', age:20},{name:'걸스데이',age:22},{ name: '티아라', age: 23 }];

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);

Users.splice(1,0,{name:'애프터스쿨',age:25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2,2);
console.log('splice()로 인덱스 2 요소를 1개 삭제한 후');
console.dir(Users);