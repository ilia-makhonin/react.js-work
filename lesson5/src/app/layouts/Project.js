import React from 'react';
import Header from './../components/header/Header';
import Footer from './../components/footer/Footer';

export default class Project extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <main className="content">
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}