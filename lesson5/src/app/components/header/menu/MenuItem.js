import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
    render() {
        return (
            <li className={this.props.active ? "menu_item active" : "menu_item"}>
                <Link to={this.props.href}>
                    {this.props.title}
                </Link>
            </li>
        );
    }
}