import InputComponent from '../InputComponent';

describe('InputComponent', () => {
    const body = document.querySelector('body');
    const component = new InputComponent({
        id: '1',
        target: body,
    });
    const input = document.createElement('input');
    input.setAttribute('placeholder', 'Amount of generated images...');

    it('should be string', () => {
        const expectedValue = {
            id: '1',
            target: body,
            component: input,
            initTemplate: function() {},
        };
        console.log(component);
        console.log(expectedValue);

        // expect(component instanceof InputComponent).toBe(true);
        // expect(expectedValue instanceof InputComponent).toBe(true);

        expect({...component})
            .toEqual(expectedValue);
    });
});