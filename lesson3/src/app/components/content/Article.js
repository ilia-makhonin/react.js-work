import React from 'react';

export default class Article extends React.Component {
    render() {
        return (
            <article className={"article"} key={this.props.keyElem}>
                <h3 className={"header_article"}>{this.props.titleArt}</h3>
                <p className={"text_article"}>{this.props.textArt}</p>
            </article>
        );
    }
}