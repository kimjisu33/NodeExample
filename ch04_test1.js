let url=require('url');

let curURL=url.parse('https://search.naver.com/search.naver?ie=UTF-8&query=papcorn&sm=chr_hty');
let curStr=url.format(curURL);

console.log('주소 문자열 : %s',curStr);
console.log(curURL);

let querystring=require('querystring');
let param=querystring.parse(curURL.query);
console.log('요청 파라미터 중 query의 값 : %s',param.query);
console.log('원본 요청 파라미터 : %s',querystring.stringify(param));