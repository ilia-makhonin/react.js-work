import React from 'react';

export default class Copyright extends React.Component {
    render() {
        return (
            <div className="copyright">
                {this.props.children}
            </div>
        );
    }
}