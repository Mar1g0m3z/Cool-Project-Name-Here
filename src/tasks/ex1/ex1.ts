/* TS DOCUMENT */

'use strict';

export function transform_numbers(input: any): any {
	let newArray = []
	for (let i = 0; i < input.length; i++) {
		newArray.push(input[i] + 5);
	}
	return newArray;
};

export function transform_names(input: any): any {

	let newArray = [];
	for (let i = 0; i < input.length; i++) {
		// const obj = input[i] // { name: 'John', age: 25 },
		newArray.push(input[i].name)

		// for (let j in input[i]) {
		// 	if (j === 'name') {
		// 		newArray.push(input[i][j])
		// 	}
		// }
	}
	return newArray
}

export function add_ages(input: any): any {
	let sum = 0
	for (let object of input) {
		sum += object.age;

		if (Object.keys(object).length !== 2) {
			throw new Error('Object has more than 2 keys');
		}
	}
	return sum;
}


export function transform_people(input: any): any {
	let newArray = [];
	for (let object of input) {
		const is_adult = object.age >= 18;
		newArray.push({
			name: object.name,
			is_adult: is_adult,
		});
	}

	// add total to array
	newArray.push(add_ages(input));

	return newArray;
}
