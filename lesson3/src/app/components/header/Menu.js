import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    render() {
        let menuItems = [];

        for (let i = 0; i < this.props.menuSection.length; i++) {
            let item = (
                <li key={i} className={"menu_elem"}>
                    <MenuItem hrefLink={this.props.menuSection[i].href} titleLink={this.props.menuSection[i].title}/>
                </li>
            );
            menuItems.push(item);
        }

        return (
            <nav className={"header_menu"}>
                <ul>
                    {menuItems}
                </ul>
            </nav>
        );
    }
}