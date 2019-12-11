import {
    FIREBASE_URL,
    PICSUM_URL,
    random,
} from '../constants';

describe('Constants', () => {
    it('should be string', () => {
        expect(typeof PICSUM_URL)
            .toBe('string');
        expect(typeof FIREBASE_URL)
            .toBe('string');
    });
});

describe('Random function', () => {
    const value = random(1, 10);

    it('should returns a number', () => {
        expect(typeof value)
            .toBe('number');
    });

    it('should returns a number between 1 and 10', () => {
        expect(value)
            .toBeGreaterThanOrEqual(1);
        expect(value)
            .toBeLessThanOrEqual(10);
    });
});
