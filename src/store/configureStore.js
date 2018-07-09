import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from '../reducers/application';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import positionReducer from '../reducers/position';
import positionsReducer from '../reducers/positions';
import positionWatchReducer from '../reducers/position_watch';
import userReducer from '../reducers/user';
import userDocumentsReducer from '../reducers/user_document';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            application: applicationReducer,
            auth: authReducer,
            filters: filtersReducer,
            position: positionReducer,
            positions: positionsReducer,
            positionWatch: positionWatchReducer,
            user: userReducer,
            userDocuments: userDocumentsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
