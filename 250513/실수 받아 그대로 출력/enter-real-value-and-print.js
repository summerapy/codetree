// 변수 선언, 입력
const fs = require("fs");

let n = fs.readFileSync(0).toString();
n = Number(n);


// 출력
console.log(n.toFixed(2));
