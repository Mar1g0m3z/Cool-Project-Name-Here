

export function a() {

}

export function b(input: any) {

}

export function c(input_1: any, input_2: any) {

}

export function d(...args: any) {

}

export function e(input: any = 1) {

}

const f = e;

f();

const g = function h() {

}

const i = function () {

}

const j = () => {

}

// IIFE (Immediately Invoked Function Expression)

(function () {
    console.log('moo');
})();

(() => {
    console.log('moo');
})();

const value = (() => {
    console.log('moo');
    return 1;
})();

// async-usage of IIFE

async function work() {

}

(async () => {
    await work();
})();

function new_thing(input: boolean) {
    if (input === true) {
        return 'a';
    } else {
        return 'b';
    }
}

export function working() {
    const thing = false;
    const value = ((input: boolean) => {
        if (input === true) {
            return 'a';
        } else {
            return 'b';
        }
    })(thing);
    const value_1= new_thing(thing);
    console.log(value);
}
