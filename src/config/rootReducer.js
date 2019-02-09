import { combineReducers } from 'redux';

const tmpReducer = (state = {}, { type, payload }) => {
    return state;
};

export const rootReducer = combineReducers({
    tmpReducer,
});
