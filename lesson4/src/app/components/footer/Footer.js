import React from 'react';
import Social from './Social';
import Copyright from './Copyright';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer_content">
                <Social/>
                <Copyright/>
            </div>
        );
    }
}