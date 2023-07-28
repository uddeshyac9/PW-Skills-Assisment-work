let arr = [1, 2, -3, 5, -9, -8, -7, 7];
let positivenum =[];
for (const num of arr) {
  if(num > 0) {
    positivenum.push(num);
  }
}
console.log(positivenum);