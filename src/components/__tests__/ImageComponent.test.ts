import ImageComponent from '../ImageComponent';

describe('ImageComponent', () => {
    const body = document.querySelector('body');
    const component = new ImageComponent({
        id: '1',
        target: body,
        content: {
            id: '4',
            src: 'image 4',
        },
    });

    it('should have specific structure', () => {
        const expectedValue = {
            id: '1',
            target: body,
            title: '4',
            component: {},
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});