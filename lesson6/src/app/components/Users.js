import React from 'react';
import UsersList from './UsersList';
import UsersStore from '../stores/usersStore';
import { addUser, fetchUser } from '../actions/usersActions';

export default class Users extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        this.newUser = this.newUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    newUser()
    {
        let id = 1;
        let name = 'New User';
        let username = 'ABC User';
        let email = '1@2.com';
        let phone = '79998887766';
        let website = 'my_site.com';

        addUser({id, name, username, email, phone, website});
    }

    onUserChange(users)
    {
        this.setState({
            users: users
        });
    }

    componentWillMount(){
        UsersStore.on('change', this.onUserChange);
    }

    componentDidMount()
    {
        fetchUser();
    }

    componentWillUnmount(){
        UsersStore.removeListener('change', this.onUserChange);
    }

    render()
    {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-primary btn-block"
                    onClick={this.newUser}
                >Новый пользователь</button>
                <UsersList users={this.state.users} />
            </div>
        );
    }
}