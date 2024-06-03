/* TS DOCUMENT */

'use strict';

/*
 * Return an array containing all numbers increased by the given amount.
 */
export function increase_numbers(numbers: number[], amount: number): number[] {
	let newArr = [];
	let increase_nums = numbers.map((num) => {
		newArr.push(num + amount);
	});
	return newArr;
}

/*
 * Return an array containing objects with the same names and a boolean is_adult.
 */
export function transform_people(
	people: { name: string; age: number }[],
): { name: string; is_adult: boolean }[] {
	return [];
}

/*
 * Return an array containing only names with 4 letters.
 */
export function filter_names(names: string[]): string[] {
	let short_array = [];
	let short_names = names.map((name) => {
		if (name.length === 4 && name) {
			short_array.push(name);
		}
	});
	return short_array;
}
