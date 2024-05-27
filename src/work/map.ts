// map creates a new array popuilated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);
console.log(map1);

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
