import {
    analyticsCategories,
    analyticsActions,
    analyticsLabels,
    errorInputFieldClassName
} from 'Tools/constants';

describe('Tools Constants', () => {
    describe('analyticsCategories', () => {
        it('should contain previously defined keys', () => {
            const expectedObject = {
                contact: expect.any(String),
                navigate: expect.any(String),
            };

            expect(analyticsCategories).toEqual(expectedObject);
        })
    });

    describe('analyticsActions', () => {
        it('should contain previously defined keys', () => {
            const expectedObject = {
                closeModal: expect.any(String),
                navigateByButton: expect.any(String),
                openModal: expect.any(String),
                sendEmail: expect.any(String),
            };

            expect(analyticsActions).toEqual(expectedObject);
        })
    });

    describe('analyticsLabels', () => {
        it('should contain previously defined keys', () => {
            const expectedObject = {
                auditForm: expect.any(String),
                contactForm: expect.any(String),
            };

            expect(analyticsLabels).toEqual(expectedObject);
        })
    });

    describe('errorInputFieldClassName', () => {
        it('should export a string', () => {
            expect(errorInputFieldClassName).toEqual(expect.any(String));
        });
    });
});
