import React from 'react';

export default class Logotype extends React.Component {
    render() {
        return (
            <div className={"logotype"}>
                {this.props.logoText}
            </div>
        );
    }
}