import React from 'react';
import NewsFeed from './NewsFeed';

export default class Content extends React.Component {
    render() {
        return (
            <main className={"content"}>
                <NewsFeed/>
            </main>
        )
    }
}