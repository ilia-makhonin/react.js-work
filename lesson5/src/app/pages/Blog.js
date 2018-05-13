import React from 'react';
import axios from 'axios';
import Post from "../components/content/Post";

export default class Blog extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            posts: []
        };

        axios
            .get('http://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let { data } = response;
                this.setState({
                    posts: data
                });
            });
    }
    render() {

        if (!this.state.posts.length){
            return null;
        }

        let posts = this.state.posts.map((post, index) => {
            return <Post key={index} {...post}/>
        });

        return (
            <section className="blog_page">
                <div className="blog_content">
                    {posts}
                </div>
            </section>
        );
    }
}