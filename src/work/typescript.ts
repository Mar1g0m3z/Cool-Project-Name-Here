export function add(a: number, b: number): number {
	return a + b;
}

const sum = add(1, 2);

function moo(): string[] {
	return [];
}

function greet(name: string | number): string | number {
	if (typeof name === 'string') {
		return `Hello ${name}`;
	} else {
		return name;
	}
}

function log(input: any) {
	console.log(new Date().toISOString());
	console.log(input);
}

function printer(text: string | number | boolean) {
	console.log(`Text: ${text}`);
}

printer('hello');
printer('117');
printer(117);

function save(): void {
	return;
}

const person = {
	name: 'John',
	age: 30,
};

// types

type Animal = {
	legs: number;
	species: string;
};

type Bird = Animal & {
	wingspan: number;
	handler: Pick<Person, 'name' | 'age'>;
	owner: Omit<Person, 'gender'>;
};

const owl: Bird = {
	legs: 2,
	species: 'bird of prey',
	wingspan: 5,
	handler: {
		age: 29,
		name: 'Ben',
	},
	owner: {
		age: 29,
		name: 'Sela',
	},
};

// interfaces

interface Person {
	name: string;
	age: number;
	gender: Gender;
}

interface Parent extends Person {
	children: Person[];
}

const peter: Parent = {
	age: 30,
	gender: 'Other',
	name: 'Peter',
	children: [],
};

function print_person(person: Person) {
	console.log(`${person.name} is ${person.age} old`);
}

// John is 38 years old

print_person({ age: 38, name: 'John', moo: 1 });

function create_bird(species: string): Animal {
	return {
		legs: 2,
		species,
	};
}

const raven = create_bird('raven');

type Gender = 'Male' | 'Female' | 'Non-Binary' | 'Other';

const gender: Gender = 'Male';

type Order = 'ASC' | 'DESC';

type Per_Page = 20 | 50 | 100;

type Search_Order = 'ASC' | 'DESC';

type Search_Settings = {
	per_page: Per_Page;
	order: Search_Order;
};

const settings: Search_Settings = {
	order: 'ASC',
	per_page: 50,
};

// fix type never errors

function moop() {
	[1, 2, 3].reduce((acc: number[], elem) => {
		console.log(elem);

		acc.push(elem);
		acc.push(elem);

		return acc;
	}, []);
}

type Types =
	| string
	| number
	| {}
	| []
	| number[]
	| string[]
	| boolean
	| undefined
	| null
	| void
	| any
	| unknown
	| never;

function boop(input: any) {
	input.pop();
	input.toLowerCase();
}

// GET .com/api/listings
// GET .com/api/listings/123
// POST .com/api/listings

interface Listing {
	title: string;
	price: number;
}

function validate_input(input: unknown) {
	if (typeof input === 'object' && input !== null) {
		console.log(input);
		if ('title' in input) {
			console.log(input.title);
		}
	} else {
		console.log(input);
	}
}

/** =================== */

import express from 'express';
const app = express();
const port = 3000;

app.post('/listings', (req, res) => {
	const data = req.body;

	validate_input(data);

	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

/*

{
    name: 'T-Shirt',
    amount: 49.99,
}

'moo'

*/
// ben is the best
