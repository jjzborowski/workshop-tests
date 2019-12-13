import GalleryComponent from '../GalleryComponent';
import * as API from '../../common/api';

describe('GalleryComponent', () => {
    const body = document.querySelector('body');
    const databaseData = {
        '1': {
            id: '1',
            src: 'image 1',
        },
        '2': {
            id: '2',
            src: 'image 2',
        },
        '3': {
            id: '3',
            src: 'image 3',
        },
    };

    jest.spyOn(API, 'apiGetImages').mockReturnValue(new Promise((resolve, reject) => {
        resolve(databaseData);
    }));

    it('should have specific structure', () => {
        const component = new GalleryComponent({
            target: body,
        });
        const expectedValue = {
            target: body,
            images: {},
            component: {},
            galleryPanel: {},
            galleryContainer: {},
            input: {
                id: 'imageAmountInput',
                target: body,
                component: {},
            },
            generateButton: {
                id: 'generateButton',
                target: body,
                component: {
                    innerText: 'Generate images'
                },
            },
            clearButton: {
                id: 'clearButton',
                target: body,
                component: {
                    innerText: 'Clear gallery',
                },
            },
        };

        expect(JSON.stringify(component))
            .toEqual(JSON.stringify(expectedValue));
    });
});