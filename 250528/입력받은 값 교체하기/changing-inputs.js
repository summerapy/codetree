// 변수 선언, 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

// 값 교체
[a, b] = [b, a];

// 출력
console.log(a, b);
