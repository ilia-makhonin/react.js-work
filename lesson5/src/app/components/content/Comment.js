import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <article className="comment_article">
                <h3 className="comment_article_name">
                    {this.props.name}
                </h3>
                <h4 className="comment_article_email">
                    {this.props.email}
                </h4>
                <p className="comment_article_text">
                    {this.props.body}
                </p>
            </article>
        );
    }
}