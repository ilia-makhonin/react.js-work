import React from 'react';

export default class Contacts extends React.Component {
    render() {
        return (
            <div className="contacts">
                <address>
                    <p className="contact_phone">{this.props.contact.phone}</p>
                    <p className="contact_email">{this.props.contact.email}</p>
                </address>
            </div>
        );
    }
}