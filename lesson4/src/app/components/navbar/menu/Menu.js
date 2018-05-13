import React from 'react';
import MenuItem from './MenuItem';
import {link} from './MenuLink';

export default class Menu extends React.Component {
    render() {
        let menuItem = [];

        for (let i = 0; i < link.length; i++) {
            menuItem.push(<MenuItem key={i} hrefLink={link[i].href} titleLink={link[i].title}/>);
        }
        return (
            <div className="menu">
                <ul className="menu_container">
                    {menuItem}
                </ul>
            </div>
        );
    }
}