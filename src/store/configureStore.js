import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from 'Reducers/application';
import applicationProcessReducer from 'Reducers/applicationProcess';
import authReducer from 'Reducers/auth';
import positionsFilterReducer from 'Reducers/filters/positions';
import positionReducer from 'Reducers/position';
import positionsReducer from 'Reducers/positions';
import positionsWatchedReducer from 'Reducers/positionsWatched';
import userReducer from 'Reducers/user';
import userDocumentsReducer from 'Reducers/userDocuments';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            application: applicationReducer,
            applicationProcess: applicationProcessReducer,
            auth: authReducer,
            filters: combineReducers({
                positions: positionsFilterReducer,
            }),
            position: positionReducer,
            positions: positionsReducer,
            positionsWatched: positionsWatchedReducer,
            user: userReducer,
            userDocuments: userDocumentsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
