import {
    apiGetImages,
    apiRemoveImageById,
    apiRemoveImages,
    apiSetImage,
} from '../api';

beforeEach(() => {
    fetch.resetMocks();
});

describe('API', () => {
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

    describe('apiGetImages', () => {
        it('should return data if connection was fine', () => {
            const expectedValue = databaseData;

            fetch.mockResponseOnce(JSON.stringify(expectedValue));

            return apiGetImages()
                .then(response => {
                    expect(response)
                        .toMatchObject(expectedValue);
                });
        });

        it('should return error message if connection was wrong', () => {
            const expectedValue = 'invalid-json';

            fetch.mockResponseOnce('Failed to fetch');

            return apiGetImages()
                .then(response => {
                    expect(response.type)
                        .toEqual(expectedValue);
                });
        });
    });

    describe('apiSetImage', () => {
        it('should return object with id of the image', () => {
            const mockImageData = {
                id: '1',
                src: 'image 1',
            };
            const expectedValue = {
                name: '1',
            };

            fetch.mockResponseOnce(JSON.stringify(expectedValue));

            return apiSetImage(mockImageData)
                .then(response => {
                    expect(response)
                        .toMatchObject(expectedValue);
                });
        });
    });

    describe('apiRemoveImageById', () => {
        it('should return databaseData downsized by object with id 1', () => {
            const expectedValue = { ...databaseData };
            delete expectedValue['1'];

            fetch.mockResponseOnce(JSON.stringify(expectedValue));

            return apiRemoveImageById('1')
                .then(response => {
                    expect(response)
                        .toMatchObject(expectedValue);
                });
        });
    });

    describe('apiRemoveImages', () => {
        it('should return empty object', () => {
            const expectedValue = {};

            fetch.mockResponseOnce(JSON.stringify(expectedValue));

            return apiRemoveImages()
                .then(response => {
                    expect(response)
                        .toMatchObject(expectedValue);
                });
        });
    });
});