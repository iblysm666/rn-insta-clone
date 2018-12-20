import { combineReducers } from 'redux';

let instaFeedReducers = (state = {
    data: [],
    loading: false
}, action) => {
    switch (action.type) {
        case 'FETCH_POST_SUCCESS':
            state = Object.assign({}, state, {loading: false, post: action.data});
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    instaFeed: instaFeedReducers
});

export default rootReducer;
