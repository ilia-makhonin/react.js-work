import dispatcher from '../dispatcher';
import { ADD_USER, FETCH_USERS_START } from '../constants/usersConstants';

export function addUser({id, name, username, email, phone, website}) {
    const user = {id, name, username, email, phone, website};

    dispatcher.dispatch({
        type: ADD_USER,
        payload: user
    });
}

export function fetchUser() {
    dispatcher.dispatch({
        type: FETCH_USERS_START
    });
}