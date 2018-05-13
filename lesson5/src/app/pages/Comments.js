import React from 'react';
import axios from 'axios';
import Comment from "../components/content/Comment";

export default class Comments extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            comments: []
        };

        axios
            .get('http://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                let { data } = response;
                this.setState({
                    comments: data
                });
            });
    }

    render() {

        if (!this.state.comments.length) {
            return null;
        }

        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} {...comment}/>
        });

        return (
            <section className="comments_page">
                <div className="comments_content">
                    {comments}
                </div>
            </section>
        );
    }
}