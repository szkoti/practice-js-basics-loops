const x = 5;
let result = 0;


// for (let i = 1; i < x + 1 ; i++) {
//     result = i + result;
//     console.log(result);
// };

let i = 1;
while(i <= x) {
    result = i + result;
    i++;
}
console.log(result)
