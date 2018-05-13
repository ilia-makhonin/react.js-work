import React from 'react';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="header_menu">
                <nav className="menu_nav">
                    <ul className="menu_container">
                        {this.props.children}
                    </ul>
                </nav>
            </div>
        );
    }
}