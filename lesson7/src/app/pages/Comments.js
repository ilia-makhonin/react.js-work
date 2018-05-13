import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from './../components/commentsAction';

import CommentsList from '../components/CommentsList';

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    }
})

export default class Comments extends React.Component {
    constructor(props) {
        super(props);
        let toDispatch = fetchComments();
        this.props.dispatch(toDispatch);
    }

    render() {
        return (
            <div className="container">
                {
                    (this.props.is_fetching) ? "Loading..." : <CommentsList comments={this.props.comments}/>
                }
            </div>
        );
    }
}