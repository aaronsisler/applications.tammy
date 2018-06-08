import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import userReducer from '../reducers/user';
import positionsReducer from '../reducers/position';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            user: userReducer,
            positions: positionsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
