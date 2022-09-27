const {countMissing} = require('./brackets');

describe('cbracets missing', () => {
    test(')() = 1', () => {
        expect(countMissing('()(')).toBe(1);
    });

    test('(()) = 0', () => {
        expect(countMissing('(())')).toBe(0);
    });

    test('))(( = 4', () => {
        expect(countMissing('))((')).toBe(4);
    })
})