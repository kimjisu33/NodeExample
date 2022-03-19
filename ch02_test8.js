let path=require('path');

let directories=["user","sunny","docs"];
let docDirectory=directories.join(path.sep);
console.log('문서 디렉토리 : %s',docDirectory);

let curPath=path.join('/User/sunny','notepad.exe');
console.log('파일 패스 : %s',curPath);

let filename="C:\\User\\sunny\\notepad.exe";
let dirname=path.dirname(filename);
let basename=path.basename(filename);
let extname=path.extname(filename);
console.log('디렉토리 : %s, 파일이름 : %s, 확장자 : %s',dirname, basename,extname);