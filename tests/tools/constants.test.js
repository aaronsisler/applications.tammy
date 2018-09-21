import {
    ANALYTICS_CATEGORIES,
    ANALYTICS_ACTIONS,
    ANALYTICS_LABELS,
    ERROR_INPUT_FIELD_CLASSNAME
} from 'Tools/constants';

describe('Tools Constants', () => {
    describe('analyticsCategories', () => {
        it('should contain previously defined keys', () => {
            const expectedObject = {
                contact: expect.any(String),
                navigate: expect.any(String),
            };

            expect(ANALYTICS_CATEGORIES).toEqual(expectedObject);
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

            expect(ANALYTICS_ACTIONS).toEqual(expectedObject);
        })
    });

    describe('analyticsLabels', () => {
        it('should contain previously defined keys', () => {
            const expectedObject = {
                auditForm: expect.any(String),
                contactForm: expect.any(String),
            };

            expect(ANALYTICS_LABELS).toEqual(expectedObject);
        })
    });

    describe('errorInputFieldClassName', () => {
        it('should export a string', () => {
            expect(ERROR_INPUT_FIELD_CLASSNAME).toEqual(expect.any(String));
        });
    });
});
