import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Project from './app/layouts/Project';
import Home from './app/pages/Home';
import Blog from './app/pages/Blog';
import Comments from './app/pages/Comments';
import Users from './app/pages/Users';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Project}>
            <IndexRoute component={Home}/>
            <Route path="blog" component={Blog}/>
            <Route path="comments" component={Comments}/>
            <Route path="users" component={Users}/>
        </Route>
    </Router>, app);