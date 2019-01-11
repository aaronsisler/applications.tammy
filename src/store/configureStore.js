import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import applicantReducer from 'Reducers/applicant';
import applicantsReducer from 'Reducers/applicants';
import applicantsFilterReducer from 'Reducers/filters/applicants';
import applicationReducer from 'Reducers/application';
import applicationProcessReducer from 'Reducers/applicationProcess';
import authReducer from 'Reducers/auth';
import notificationsReducer from 'Reducers/notifications';
import positionsFilterReducer from 'Reducers/filters/positions';
import positionReducer from 'Reducers/position';
import positionsReducer from 'Reducers/positions';
import positionsWatchedReducer from 'Reducers/positionsWatched';
import userReducer from 'Reducers/user';
import userDocumentsReducer from 'Reducers/userDocuments';
import workflowReducer from 'Reducers/workflow';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            applicant: applicantReducer,
            applicants: applicantsReducer,
            application: applicationReducer,
            applicationProcess: applicationProcessReducer,
            auth: authReducer,
            filters: combineReducers({
                applicants: applicantsFilterReducer,
                positions: positionsFilterReducer,
            }),
            notifications: notificationsReducer,
            position: positionReducer,
            positions: positionsReducer,
            positionsWatched: positionsWatchedReducer,
            user: userReducer,
            userDocuments: userDocumentsReducer,
            workflow: workflowReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
