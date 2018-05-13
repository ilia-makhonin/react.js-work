import { EventEmitter } from 'events';
import { ADD_USER, FETCH_USERS_START, FETCH_USERS_END } from '../constants/usersConstants';
import dispatcher from '../dispatcher';
import axios from 'axios';

class UserStore extends EventEmitter {
    constructor() {
        super(...arguments);

        this.users = [];

        this.fetchUserStart = this.fetchUserStart.bind(this);
        this.fetchUserEnd = this.fetchUserEnd.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchUserStart()
    {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let { data } = response;

                dispatcher.dispatch({
                    type: FETCH_USERS_END,
                    payload: data
                });
            });
    }

    fetchUserEnd(users)
    {
        this.users = users;
        this.change();
    }

    change(){
        this.emit('change', this.users);
    }

    addUser(user)
    {
        this.users.push(user);
        this.change();
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_USER: {
                this.addUser(action.payload);
                break;
            }
            case FETCH_USERS_START: {
                this.fetchUserStart();
                break;
            }
            case FETCH_USERS_END: {
                this.fetchUserEnd(action.payload);
                break;
            }
        }
    }
}

const uS = new UserStore();
dispatcher.register(uS.handleActions);
export default uS;