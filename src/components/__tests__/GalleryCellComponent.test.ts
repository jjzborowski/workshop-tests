import GalleryCellComponent from '../GalleryCellComponent';
import ImageComponent from '../ImageComponent';

describe('GalleryCellComponent', () => {
    const body = document.querySelector('body');
    const imageComponent = new ImageComponent({
        id: '1',
        target: body,
        content: {
            id: '4',
            src: 'image 4',
        },
    });
    const component = new GalleryCellComponent({
        id: '1',
        target: body,
        content: imageComponent,
        onRemove: () => {},
    });

    it('should have specific structure', () => {
        const expectedValue = {
            id: '1',
            target: body,
            component: {},
            imageElement: {},
            imageTitleElement: {
                innerText: '4',
            },
            removeButton: {
                innerText: 'X',
            },
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});