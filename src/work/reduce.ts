// reduce executes a call back function on each element of the array, in order, passing in the return value from the calculation on the epreceding element. It sholdreturn a single value afterrunning the reducer accross all elements of the array.
// the first time the calil back is run, theres no return value, you can supply initial value of to use in its place, if not the default value is the element in index 0 of the array.

const array2 = [1, 2, 3, 4];
const initialValue = 0;
const sumwithInitial = array2.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	initialValue,
);

console.log(sumwithInitial);
