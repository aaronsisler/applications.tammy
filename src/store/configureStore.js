import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from 'Reducers/auth';
import positionsFilterReducer from 'Reducers/filters/positions';
import positionReducer from 'Reducers/position';
import positionsReducer from 'Reducers/positions';
import userReducer from 'Reducers/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            filters: combineReducers({
                positions: positionsFilterReducer,
            }),
            position: positionReducer,
            positions: positionsReducer,
            user: userReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
