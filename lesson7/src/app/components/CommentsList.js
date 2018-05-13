import React from 'react';
import Comment from './Comment';

export default class CommentsList extends React.Component {
    constructor() {
        super(...arguments);

        this.commentsList = [];
        this.props.comments.map((comment, index) => {
            this.commentsList.push(<Comment key={index} {...comment}/>);
        });
    }

    render() {
        return (
            <div className="panel">
                <h2 className="modal-header bg-success">Комментарии</h2>
                {this.commentsList}
            </div>
        );
    }
}