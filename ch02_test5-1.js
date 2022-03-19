let a=10, b=5;

let calc=require('./calc22');

console.log("김지수의 사칙연산");
console.log(a+" + "+b+" = "+calc.add(a,b));
console.log(a+" - "+b+" = "+calc.sub(a,b));
console.log(a+" * "+b+" = "+calc.mul(a,b));
console.log(a+" / "+b+" = "+calc.div(a,b));

