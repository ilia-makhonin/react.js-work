import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Comments from './app/components/Comments';
import Users from './app/components/Users';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="comments" component={Comments} />
            <Route path="users" component={Users} />
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
    app);