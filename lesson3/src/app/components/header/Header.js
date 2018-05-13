import React from 'react';
import Logo from './Logotype';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        const menuSection = [
            {
                href: './',
                title: 'Главная'
            },
            {
                href: './section',
                title: 'Разделы'
            },
            {
                href: './login',
                title: 'Вход/Регестрация'
            }
        ];
        return (
            <header className={"header"}>
                <Logo logoText={"News Blog"}/>
                <Menu menuSection={menuSection}/>
            </header>
        );
    }
}