/* TS DOCUMENT */

'use strict';

/**
 * Q1. 
 * Create an interface for this data structure.
 * - 'lang' should only be 'en', 'fr' or 'es'.
 * - 'country' should only be 'GB', 'US', 'CA', 'FR' or 'ES'.
 */

type Lang = 'en' | 'fr' | 'es';

type Country = 'GB' | 'US' | 'CA' | 'FR' | 'ES';

interface Profile {
    profile_id: string;
    meta: {
        created: Date;
        likes: number;
    };
    details: {
        username: string;
        email: string;
    };
    settings: {
        lang: Lang;
        country: Country;
    };
};

const profile: Profile = {
    profile_id: '0ecb06fb-ab5c-46e5-8a24-bd4f89e5a1ee',
    meta: {
        created: new Date(),
        likes: 117,
    },
    details: {
        username: 'Latchy',
        email: 'ben@latchy.net',
    },
    settings: {
        lang: 'en',
        country: 'GB',
    },
};

/**
 * Q2.
 * Type this function so that it accepts two parameters.
 * - The first parameter can be a number or a string.
 * - The second parameter can only be a number.
 * If the first parameter is a number, the function should return that number multiplied by the second parameter.
 * If the first parameter is a string, the function should return null.
 * The function should have an explicit return type.
 */

// function q2(param: <param type>): <return type> {}
function q2(first: number | string, second: number): number | null {
    if (typeof first === 'number') {
        return first * second;
    } else {
        return null;
    }
}

/*
 * Q3.
 * Fix the type error by assigning the correct type to 'acc' object.
 */
//  if you need to do a array of object we can do: {}[] 
type Result = { number: number, fizz: boolean, buzz: boolean, text: string | number }; // change this to the correct type.

[1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc: Result[], elem, number) => {
    const fizz = number % 3 === 0;
    const buzz = number % 5 === 0;
    if (fizz && buzz) {
        const text = (fizz && buzz) ? 'FizzBuzz' : fizz ? 'Fizz' : buzz ? 'Buzz' : number;
        const elem: Result = { number, fizz, buzz, text };
        acc.push(elem);
    }
    return acc;
}, []);
