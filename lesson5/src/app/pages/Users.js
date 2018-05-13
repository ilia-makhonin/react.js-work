import React from 'react';
import axios from 'axios';
import User from "../components/content/User";

export default class Users extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        axios
            .get('http://jsonplaceholder.typicode.com/users')
            .then((response) => {
                let { data } = response;
                this.setState({
                    users: data
                });
            });
    }

    render() {
        if (!this.state.users.length) {
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user}/>
        });

        return (
            <section className="comments_page">
                <div className="comments_content">
                    {users}
                </div>
            </section>
        );
    }
}