import ButtonComponent from '../ButtonComponent';

describe('ButtonComponent', () => {
    const body = document.querySelector('body');
    const component = new ButtonComponent({
        id: '1',
        target: body,
    });

    it('should have specific structure', () => {
        const expectedValue = {
            id: '1',
            target: body,
            component: {},
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});