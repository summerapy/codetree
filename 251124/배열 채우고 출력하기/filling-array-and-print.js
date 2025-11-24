// 배열을 구현하여 주어진 수를 입력받습니다.
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

// 9부터 0까지의 인덱스에 주어진 문자를 차례대로 출력합니다.
let str = "";
for (let i = 9; i >= 0; i--) {
    str += input[i];
}

console.log(str);
