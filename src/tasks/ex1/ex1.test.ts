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
                /**
                 * This animal is declared in the `input.animals.ant` object.
                 * The `name` property is equal to the key of the object, which is 'ant'.
                 * The `type` property is equal to the `type` value of the object, which is 'insect'.
                 * The `diet` property is calculated by using the objects' eats values and the `input.foods` property.
                 *  - If what it eats is found int he `input.foods.herbivorous` array, then the diet is 'herbivorous'.
                 *  - However, if what it eats is found in the `input.foods.carnivorous` array, then the diet is 'carnivorous'.
                 * The `legs` property is determined by the `legs` property of the object, if the number is greater than 0, then it has legs.
                 * The `travels` property is determined by the `input.moves` property.
                 *  - The the animals' object `type` value can be used to match the key in the `input.moves` object.
                 *  - Be aware, that the `input.moves` object has values of different types, so you need to check if the 'type' value matches, or is included in the array.
                 */
                { name: 'ant', type: 'insect', diet: 'herbivorous', legs: true, travels: 'walk' },

                // ...the others
                { name: 'bird', type: 'bird', diet: 'carnivorous', legs: true, travels: 'fly' },
                { name: 'cat', type: 'mammal', diet: 'carnivorous', legs: true, travels: 'walk' },
                { name: 'cow', type: 'mammal', diet: 'herbivorous', legs: true, travels: 'walk' },
                { name: 'dog', type: 'mammal', diet: 'carnivorous', legs: true, travels: 'walk' },
                { name: 'fish', type: 'fish', diet: 'herbivorous', legs: false, travels: 'swim' },
            ]);
        });
    });
});