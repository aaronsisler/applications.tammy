import {
    closeModalEvent,
    navigateByButtonEvent,
    openModalEvent,
} from 'Tools/analyticsEvents';

describe('Tools Analytics Events', () => {
    const expectedObject = {
        category: expect.any(String),
        action: expect.any(String),
    };

    describe('closeModalEvent', () => {
        it('should contain previously defined keys', () => {
            expect(closeModalEvent).toEqual(expectedObject);
        })
    });

    describe('navigateByButtonEvent', () => {
        it('should contain previously defined keys', () => {
            expect(navigateByButtonEvent).toEqual(expectedObject);
        })
    });

    describe('openModalEvent', () => {
        it('should contain previously defined keys', () => {
            expect(openModalEvent).toEqual(expectedObject);
        })
    });
});
