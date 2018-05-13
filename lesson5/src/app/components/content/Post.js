import React from 'react';

export default class Post extends React.Component {
    render() {
        return (
            <article className="blog_article">
                <h3 className="blog_article_header">
                    {this.props.title}
                </h3>
                <p className="blog_article_content">
                    {this.props.body}
                </p>
            </article>
        );
    }
}