import React from 'react';

export default class MenuItem extends React.Component {
    render() {
        return (
            <li className="menu_item" key={this.props.key}>
                <a href={this.props.hrefLink} className="menu_link">
                    {this.props.titleLink}
                </a>
            </li>
        );
    }
}