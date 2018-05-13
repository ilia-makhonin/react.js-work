import React from 'react';
import Menu from './menu/Menu';
import MenuItem from './menu/MenuItem';
import Logotype from './logotype/Logotype';

export default class Header extends React.Component {

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <header className="header">
                <Logotype>
                    "Logo-content"
                </Logotype>
                <Menu>
                    <MenuItem href="/" title="Home" active={this.isActive('/')}/>
                    <MenuItem href="/blog" title="Blog" active={this.isActive('/blog')}/>
                    <MenuItem href="/comments" title="Comments" active={this.isActive('/comments')}/>
                    <MenuItem href="/users" title="Users" active={this.isActive('/users')}/>
                </Menu>
            </header>
        );
    }
}