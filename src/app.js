import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import 'normalize.css/normalize.css';
import 'Styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from 'Actions/helpers/auth';
import { startSetPositions } from 'Actions/positions';
import { startSetUser } from 'Actions/user';
import LoadingPage from 'Core/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(startSetPositions()).then(() => {
        if (user) {
            store.dispatch(login(user.uid));
            store.dispatch(startSetUser()).then(() => {
                renderApp()
            });
        } else {
            store.dispatch(logout());
            renderApp();
        }
    })
});
