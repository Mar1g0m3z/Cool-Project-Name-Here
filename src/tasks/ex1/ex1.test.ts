/* TS DOCUMENT */

'use strict';

import { add_ages, transform_numbers, transform_names, transform_people } from './ex1';

describe('ex1.ts', () => {

    describe('#transform_numbers()', () => {

        it('should return the correct output.', () => {
            const input = [1, 3, 5, 7, 9];
            const result = transform_numbers(input);
            expect(result).toEqual([6, 8, 10, 12, 14]);
        });
    });

    describe('#transform_names()', () => {

        it('should return the correct output.', () => {
            const input = [
                { name: 'John', age: 25 },
                { name: 'Jane', age: 30 },
                { name: 'Jim', age: 35 },
                { name: 'Jill', age: 40 },
                { name: 'Jack', age: 45 },
            ];
            const result = transform_names(input);
            expect(result).toEqual([
                'John',
                'Jane',
                'Jim',
                'Jill',
                'Jack',
            ]);
        });
    });

    describe('#add_ages()', () => {

        it('should return the correct output.', () => {
            const input = [
                { name: 'John', age: 25 },
                { name: 'Jane', age: 30 },
                { name: 'Jim', age: 35 },
                { name: 'Jill', age: 40 },
                { name: 'Jack', age: 45 },
            ];
            const result = add_ages(input);
            expect(result).toEqual(175);
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
});