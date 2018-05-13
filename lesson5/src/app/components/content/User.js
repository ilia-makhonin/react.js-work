import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="user_blog">
                <header className="user_blog_header">
                    <h3 className="user_blog_name">
                        {this.props.name}
                    </h3>
                    <h4 className="user_blog_nickname">
                        {this.props.username}
                    </h4>
                </header>
                <div className="user_blog_main">
                    <p className="user_blog_email">
                        {this.props.email}
                    </p>
                    <p className="user_blog_phone">
                        {this.props.phone}
                    </p>
                </div>
                <footer className="user_blog_footer">
                    {this.props.website}
                </footer>
            </div>
        );
    }
}