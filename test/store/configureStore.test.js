import configureStore from 'Src/store/configureStore';

describe('ConfigureStore', () => {
    it('should export a function', () => {
        expect(configureStore).toBeInstanceOf(Function);
    });

    it('should create the default state', () => {
        const defaultState = {
            application: { user: {}, userDocuments: [] },
            auth: {},
            filters: {
                positions: {
                    text: '',
                },
            },
            position: null,
            positions: [],
            user: null,
            userDocuments: [],
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
