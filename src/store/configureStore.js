import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import positionReducer from '../reducers/position';
import positionsReducer from '../reducers/positions';
import userReducer from '../reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            filters: filtersReducer,
            position: positionReducer,
            positions: positionsReducer,
            user: userReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
