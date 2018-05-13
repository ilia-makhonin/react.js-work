import React from 'react';

export default class Logotype extends React.Component {
    render() {
        return (
            <div className="header_logo">
                {this.props.children}
            </div>
        );
    }
}