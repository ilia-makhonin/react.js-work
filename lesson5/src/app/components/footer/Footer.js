import React from 'react';
import Copyright from './copyright/Copyright';
import Contacts from './contacts/Contacts';

export default class Footer extends React.Component {
    constructor() {
        super(...arguments);

        this.contacts = {
            phone: '80001112233',
            email: 'email1@2.com'
        }
    }

    render() {
        return (
            <footer className="footer">
                <Contacts contact={this.contacts}/>
                <Copyright>&copy; 2018</Copyright>
            </footer>
        );
    }
}