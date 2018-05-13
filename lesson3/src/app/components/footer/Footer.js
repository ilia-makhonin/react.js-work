import React from 'react';
import AddArticle from './AddArticle';
import Copyright from './Copyright';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={"footer"}>
                <AddArticle/>
                <Copyright/>
            </footer>
        )
    }
}