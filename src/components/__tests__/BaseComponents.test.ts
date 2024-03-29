import BaseComponent from '../BaseComponent';

describe('BaseComponent', () => {
    const body = document.querySelector('body');
    const component = new BaseComponent({
        id: '1',
        target: body,
    });

    it('should have specific structure', () => {
        const expectedValue = {
            id: '1',
            target: body,
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});