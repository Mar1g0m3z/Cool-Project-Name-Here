/* TS DOCUMENT */

'use strict';

import { transform } from './ex1';

describe('ex1.ts', () => {

    describe('#transform()', () => {

        it('should return the correct output.', () => {
            const input = {
                moves: {
                    fly: 'bird',
                    swim: 'fish ',
                    walk: ['mammal ', 'insect'],
                },
                foods: {
                    herbivorous: ['leaves', 'sap', 'plants', 'fruit', 'milk', 'grass', 'seeds', 'fruit', 'treats', 'algae'],
                    carnivorous: ['mice', 'chicken', 'fish', 'worms', 'chicken', 'bones'],
                },
                animals: {
                    ant: {
                        legs: 6,
                        eats: ['leaves', 'sap', 'fruit'],
                        type: 'insect',
                    },
                    bird: {
                        legs: 2,
                        eats: ['seeds', 'worms', 'fruit'],
                        type: 'bird',
                    },
                    cat: {
                        legs: 4,
                        eats: ['mice', 'chicken', 'fish', 'milk'],
                        type: 'mammal',
                    },
                    cow: {
                        legs: 4,
                        eats: ['grass', 'milk'],
                        type: 'mammal',
                    },
                    dog: {
                        legs: 4,
                        eats: ['chicken', 'bones', 'treats'],
                        type: 'mammal',
                    },
                    fish: {
                        legs: 0,
                        eats: ['algae', 'plants'],
                        type: 'fish',
                    },
                },
            };
            const result = transform(input);
            expect(result).toEqual([
                { name: 'ant', type: 'insect', diet: 'herbivorous', legs: true, travels: 'walk' },
                { name: 'bird', type: 'bird', diet: 'carnivorous', legs: true, travels: 'fly' },
                { name: 'cat', type: 'mammal', diet: 'carnivorous', legs: true, travels: 'walk' },
                { name: 'cow', type: 'mammal', diet: 'herbivorous', legs: true, travels: 'walk' },
                { name: 'dog', type: 'mammal', diet: 'carnivorous', legs: true, travels: 'walk' },
                { name: 'fish', type: 'fish', diet: 'herbivorous', legs: false, travels: 'swim' },
            ]);
        });
    });
});