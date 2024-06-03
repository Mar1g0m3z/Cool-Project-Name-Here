/* TS DOCUMENT */

'use strict';

import { increase_numbers, transform_people, filter_names } from './ex2';

describe('ex2.ts', () => {
	describe('#increase_numbers()', () => {
		const input = [1, 3, 5, 7, 9];

		it('should increase all numbers by 5.', () => {
			const result = increase_numbers(input, 5);
			expect(result).toEqual([6, 8, 10, 12, 14]);
		});

		it('should increase all numbers by 13.', () => {
			const result = increase_numbers(input, 13);
			expect(result).toEqual([14, 16, 18, 20, 22]);
		});
	});

	describe('#transform_people()', () => {
		it('should return the correct output.', () => {
			const input = [
				{ name: 'John', age: 25 },
				{ name: 'Jane', age: 14 },
				{ name: 'Jim', age: 35 },
				{ name: 'Jill', age: 8 },
				{ name: 'Jack', age: 45 },
			];
			const result = transform_people(input);
			expect(result).toEqual([
				{ name: 'John', is_adult: true },
				{ name: 'Jane', is_adult: false },
				{ name: 'Jim', is_adult: true },
				{ name: 'Jill', is_adult: false },
				{ name: 'Jack', is_adult: true },
			]);
		});
	});

	describe('#filter_names()', () => {
		it('should return the correct output.', () => {
			const names = [
				'Ben',
				'John',
				'Jane',
				'Colin',
				'Jeff',
				'Jim',
				'Sam',
				'Sally',
				'Derek',
				'Helen',
				'Ann',
				'Claire',
				'Amy',
				'Samantha',
				'Sarah',
				'Mike',
				'Fred',
				'Molly',
			];
			const result = filter_names(names);
			expect(result).toEqual(['John', 'Jane', 'Jeff', 'Mike', 'Fred']);
		});
	});
});
