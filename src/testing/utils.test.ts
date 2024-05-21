// npm i jest ts-jest @types/jest
// @types/ bundled the typescripts definitions- 

import { add, sub } from './utils';

describe('utils.ts', () => {

    describe('#add()', () => {

        describe('testing positives...', () => {

            it('should add two numbers', () => {
                const result = add(1, 2);
                expect(result).toBe(3);
            });
        });

        describe('testing negatives...', () => {

            it('should add two negative numbers', () => {
                const result = add(-4, -2);
                expect(result).toBe(-6);
            });

            it('should add zero to a negative numbers', () => {
                const result = add(-4, 0);
                expect(result).toBe(-4);
            });
        });

        it('should add two zeros', () => {
            const result = add(0, 0);
            expect(result).toBe(0);
        });
    });

    describe('#sub()', () => {

        it('should subtract two numbers', () => {
            const result = sub(3, 2);
            expect(result).toBe(1)
        });

        it('should subtract two negative numbers', () => {
            const result = sub(-3, -1);
            expect(result).toBe(-2)
        });

        it('should subtract zero from a negative number', () => {
            const result = sub(-4, 0);
            expect(result).toBe(-4);
        });
    });
});