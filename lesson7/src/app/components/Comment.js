import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <article className="panel panel-success">
                <header className="panel-heading">
                    <h3 className="panel-title">{this.props.name}</h3>
                </header>
                <div className="panel-body">
                    {this.props.body}
                </div>
                <footer className="panel-footer">
                    {this.props.email}
                </footer>
            </article>
        );
    }
}