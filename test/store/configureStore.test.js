import configureStore from 'Src/store/configureStore';
import { steps } from '../fixtures/applicationProcess';

describe('ConfigureStore', () => {
    it('should export a function', () => {
        expect(configureStore).toBeInstanceOf(Function);
    });

    it('should create the default state', () => {
        const defaultState = {
            applicants: [],
            application: { user: {}, userDocuments: [] },
            applicationProcess: { currentStep: 0, maxSteps: 4, positionId: null, steps },
            auth: {},
            filters: {
                positions: {
                    text: '',
                },
            },
            notifications: [],
            position: null,
            positions: [],
            positionsWatched: [],
            user: null,
            userDocuments: [],
            workflow: { position: null },
        };
        const store = configureStore();

        expect(store.getState()).toEqual(defaultState);
    });

    describe('Store object', () => {
        it('should contain dispatch function', () => {
            const store = configureStore();
            expect(store.dispatch).toBeInstanceOf(Function);
        });

        it('should contain getState function', () => {
            const store = configureStore();
            expect(store.getState).toBeInstanceOf(Function);
        });
    });
});
