import React from 'react';
import Logotype from './Logotype';
import Menu from './menu/Menu';

export default class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar_block">
                <Logotype/>
                <Menu/>
            </nav>
        );
    }
}