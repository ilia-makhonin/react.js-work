import React from 'react';
import {articleList} from './ArticleList';
import Article from './Article';

export default class NewsFeed extends React.Component {
    render() {
        let articleArray = [];
        for (let i = 0; i < articleList.length; i++) {
            articleArray.push(<Article titleArt={articleList[i].title} textArt={articleList[i].text} keyElem={i}/>)
        }

        return (
            <section className={"article_section"}>
                {articleArray}
            </section>
        );
    }
}