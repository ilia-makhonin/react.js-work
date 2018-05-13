import * as Constants from './constants';

export function commentsReducer(state = {comments: [], is_fetching: false}, action) {
    switch (action.type) {
        case Constants.FETCH_COMMENTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }
        case Constants.FETCH_COMMENTS_FULFILLED: {
            state = {...state, is_fetching: false, comments: action.payload.data};
            break;
        }
        case Constants.FETCH_COMMENTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}