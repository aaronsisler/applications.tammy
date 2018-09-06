import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { history } from '../../src/tools/history';
import { firebase, googleAuthProvider } from '../../src/firebase/firebase';
import { startLogin, startLogout, } from '../../src/actions/auth';

const createMockStore = configureMockStore([thunk]);

describe('Auth Actions', () => {
    let historyPushMock;
    let signInWithPopupMock;
    let signOutMock;
    beforeEach(() => {
        signInWithPopupMock = jest.fn();
        signOutMock = jest.fn();

        signInWithPopupMock.mockResolvedValue();
        signOutMock.mockResolvedValue();
        historyPushMock = jest.spyOn(history, 'push');
        jest.spyOn(firebase, 'auth')
            .mockReturnValue({ signInWithPopup: signInWithPopupMock, signOut: signOutMock });
    })

    afterEach(() => {
        firebase.auth.mockRestore();
        history.push.mockRestore();
    })

    describe('startLogin() method', () => {
        it(`should call firebase.auth.signInWithPopup() method with googleAuthProvider`, async () => {
            const store = createMockStore();

            await store.dispatch(startLogin());

            expect(signInWithPopupMock).toHaveBeenCalledWith(googleAuthProvider);
        });

        it('should call history.push with the redirect URL parameter', async () => {
            const redirectUrl = '/mockRedirectUrl';
            const store = createMockStore();

            await store.dispatch(startLogin(redirectUrl));

            expect(historyPushMock).toHaveBeenCalledWith(redirectUrl);
        });

        it('should call history.push with the default redirect URL parameter', async () => {
            const redirectUrl = '/dashboard';
            const store = createMockStore();

            await store.dispatch(startLogin());

            expect(historyPushMock).toHaveBeenCalledWith(redirectUrl);
        });
    })

    describe('startLogout() method', () => {
        it(`should call firebase.auth.signOut() method`, async () => {
            const store = createMockStore();

            await store.dispatch(startLogout());

            expect(signOutMock).toHaveBeenCalled();
        });

        it(`should call history.push with the /logged_out' parameter`, async () => {
            const redirectUrl = '/logged_out';
            const store = createMockStore();

            await store.dispatch(startLogout());

            expect(historyPushMock).toHaveBeenCalledWith(redirectUrl);
        });
    })
})
