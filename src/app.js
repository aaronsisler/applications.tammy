import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from 'Firebase/firebase';

import 'Styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from 'Actions/helpers/auth';
import { startSetPositions } from 'Actions/positions';
import { startSetPositionsWatched } from 'Actions/positionsWatched';
import { startSetUser } from 'Actions/user';
import { startSetUserDocuments } from 'Actions/userDocuments';
//Below is for deving only
import { startSetPosition } from 'Actions/position';
import { startSetWorkflowPosition } from 'Actions/workflow';
import { startSetApplicants } from 'Actions/applicants';
import { startSetApplicant } from 'Actions/applicant';

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

firebase.auth().onAuthStateChanged(async (user) => {
    await store.dispatch(startSetPositions());
    if (user) {
        await store.dispatch(login(user.uid));
        store.dispatch(startSetUser());
        store.dispatch(startSetUserDocuments(user.uid));
        await store.dispatch(startSetPositionsWatched());
        await store.dispatch(startSetPosition("1"));
        await store.dispatch(startSetWorkflowPosition());
        await store.dispatch(startSetApplicants());
        await store.dispatch(startSetApplicant('-LR-ViB1sM_7HL9GcuYt'));
        renderApp();
    } else {
        await store.dispatch(logout());
        renderApp();
    }
});
