// reduce executes a call back function on each element of the array, in order, passing in the return value from the calculation on the epreceding element. It sholdreturn a single value afterrunning the reducer accross all elements of the array.
// the first time the calil back is run, theres no return value, you can supply initial value of to use in its place, if not the default value is the element in index 0 of the array.

const array2 = [1, 2, 3, 4];
const initialValue = 0;
const sumwithInitial = array2.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0,
);

console.log(sumwithInitial);

const arr = [1, 2, 3, 4];

// .map Example

const doubled = arr.map(function (val, index, my_arr) {
	return val * 2;
});

// 1st - 1 ... function(1, 0, [1, 2, 3, 4]) => 2
// [2]
// 2nd - 2 ... function(2, 1, [1, 2, 3, 4]) => 4
// [2, 4]
// 3rd - 3 ... function(3, 2, [1, 2, 3, 4]) => 6
// [2, 4, 6]
// 4th - 4 ... function(4, 3, [1, 2, 3, 4]) => 8
// [2, 4, 6, 8]

/* 
	array.reduce Example

	The initial value is used as the accumulator for the first iteration.
	The return value of each iteration becomes the accumulator of the next iteration.


	the initial value which can be variable or input as anything, is used as the first accumulator.
	  whih can be added directly to the end of the reduce function as second parameter. 
 When it is called, the returned value becomees the new accumulator. 
 value is the first element of the array
*/

const sum = arr.reduce(function (acc, val, index, my_arr) {
	return acc + val;
}, 5);

// 1st - 1 ... function(5, 1, 0, [1, 2, 3, 4]) => 6
// 2nd - 2 ... function(6, 2, 1, [1, 2, 3, 4]) => 7
// 3rd - 3 ... function(7, 3, 2, [1, 2, 3, 4]) => 8
// 4th - 4 ... function(8, 4, 3, [1, 2, 3, 4]) => 9


function transform(acc: any, val: any, index: any, my_arr: any) {
	acc.total += val;
	return acc;
}

const sum2 = arr.reduce(transform, { total: 0 });


const number_list = [1, 3, 8, 43, 76, 54, 21, 98, 13];

const total = number_list.reduce((acc, value) => {
	return acc + value
}, 0)

const total_even = number_list.reduce((acc, value) => {
	if (value % 2 === 0) {
		return acc + value
	} else {
		return acc
	}
}, 0);

const total_odd = number_list.reduce((acc, value) => {
	if (value % 2 !== 0) {
		return acc + value
	} else {
		return acc
	}
}, 0);


let t = 0;
let to = 0;
let te = 0;

for (let i = 0; i < number_list.length; i++) {
	const value = number_list[i];
	t += value;
	if (value % 2 === 0) {
		te += value;
	} else {
		to += value;
	}
}

const totals = number_list.reduce((acc, value) => {
	acc.t += value;
	if (value % 2 === 0) {
		acc.te += value;
	} else {
		acc.to += value;
	}
	return acc;
}, { t: 0, to: 0, te: 0 });

console.log(totals);

// 1st - 1 ... function({ t: 0, to: 0, te: 0 }, 1, 0, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => { t: 1, to: 1, te: 0 }
// 2nd - 3 ... function({ t: 1, to: 1, te: 0 }, 3, 1, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => { t: 4, to: 4, te: 0 }
// 3rd - 8 ... function({ t: 4, to: 4, te: 0 }, 8, 2, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => { t: 12, to: 4, te: 8 }
// 4th - 43 ... function({ t: 12, to: 4, te: 8 }, 43, 3, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => { t: 55, to: 47, te: 8 }


const odds = [];

for (let i = 0; i < number_list.length; i++) {
	const value = number_list[i];
	if (value % 2 !== 0) {
		odds.push(value);
	}
}

// odds = [1, 3, 43, 21, 13]

const reduced_odds = number_list.reduce((acc, value) => {
	if (value % 2 !== 0) {
		acc.push(value);
	}
	return acc;
}, []);

// 1st - 1 ... function([], 1, 0, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1]
// 2nd - 3 ... function([1], 3, 1, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3]
// 3rd - 8 ... function([1, 3], 8, 2, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3]
// 4th - 43 ... function([1, 3], 43, 3, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3, 43]
// 5th - 76 ... function([1, 3, 43], 76, 4, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3, 43]
// 6th - 54 ... function([1, 3, 43], 54, 5, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3, 43]
// 7th - 21 ... function([1, 3, 43], 21, 6, [1, 3, 8, 43, 76, 54, 21, 98, 13]) => [1, 3, 43, 21]

const numz = [1, 2, 3, 4];

const oddys2 = numz.reduce((acc, value, index, init_array) => {
	if (value % 2 !== 0) {
		return [...acc, value];
	} else {
		return acc;
	}
}, []);

const oddys = numz.reduce((acc, value, index, init_array) => {
	if (value % 2 !== 0) {
		acc.push(value);
	}
	return acc;
}, []);

// 1st - 1 ... function([], 1, 0, [1, 2, 3, 4]) => [1]
// 2nd - 2 ... function([1], 2, 1, [1, 2, 3, 4]) => [1]
// 3rd - 3 ... funciton([1], 3, 2, [1, 2, 3, 4]) => [1, 3]
// 4th - 4 ... function([1, 3], 4, 3, [1, 2, 3, 4]) => [1, 3]
// oddys = [1, 3]


const input1 = ['A', 'B', 'C']; // ['a', 'b', 'c']

const lower_input1 = input1.map((value, index) => {
	return value.toLowerCase();
});

const lower_input2 = input1.reduce((acc: string[], value, index) => {
	acc.push(value.toLowerCase())
	return acc;
}, []);


const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

names.map((name, index, arr) => {
	for (let i = 0; i < 3; i++) {
		console.log(' hip');
	}
	console.log(' horray');
});

