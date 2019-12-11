import BaseComponent from '../BaseComponent';

describe('Constants', () => {
    const body = document.querySelector('body');

    it('should be string', () => {
        const component = new BaseComponent({
            id: '1',
            target: body,
        });
        const expectedValue = <BaseComponent>{
            id: '1',
            target: body,
        };
        console.log(component);
        console.log(expectedValue);

        expect(component)
            .toEqual(expectedValue);
    });
});