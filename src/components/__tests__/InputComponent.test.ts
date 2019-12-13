import InputComponent from '../InputComponent';

describe('InputComponent', () => {
    const body = document.querySelector('body');
    const input = document.createElement('input');
    const component = new InputComponent({
        id: '1',
        target: body,
    });

    it('should have specific structure', () => {
        const expectedValue = {
            id: '1',
            target: body,
            initTemplate: () => {},
            component: input,
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});