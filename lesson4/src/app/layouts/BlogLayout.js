import React from 'react';
import NavBar from './../components/navbar/NavBar';
import Header from './../components/header/Header';
import Content from './../components/content/Content';
import Footer from './../components/footer/Footer';

export default class BlogLayout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <NavBar/>
                    <Header/>
                </header>
                <main className="main">
                    <Content/>
                </main>
                <footer className="footer">
                    <Footer/>
                </footer>
            </div>
        );
    }
}