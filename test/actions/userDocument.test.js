import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
// import database, {storage} from '../../src/firebase/firebase';
import { startSetUserDocuments } from 'Actions/userDocument';
// import * as userDocumentActionHelpers from 'Actions/helpers/userDocument';
import { defaultUserDocumentsState } from '../fixtures/userDocuments';

const createMockStore = configureMockStore([thunk]);

describe('User Documents Actions', () => {
    // const positionsMock = [];
    // positions.forEach((position) => {
        // const val = () => ({ ...position });
        // positionsMock.push({ key: position.positionId, val })
    // })

    beforeEach(() => {
        // const once = jest.fn();
        // once.mockResolvedValue(positionsMock);
        // jest.spyOn(database, 'ref').mockReturnValue({ once });
    })

    afterEach(() => {
        // database.ref.mockRestore();
    })

    describe('startSetUserDocuments() method', () => {
        it(`should call dispatch with setUserDocuments`, () => {
            // const setPositionsMock = jest.spyOn(userDocumentActionHelpers, 'setUserDocuments');
            const store = createMockStore(defaultUserDocumentsState);

            store.dispatch(startSetUserDocuments('testingTaco'));
            // expect(store.getActions().length).toBe(1);
            // expect(setPositionsMock).toHaveBeenCalledWith(positions);
        })
    })
})
