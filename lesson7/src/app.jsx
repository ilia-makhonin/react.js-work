import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './app/components/store';

import Comments from './app/pages/Comments';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Comments}/>
        </Router>
    </Provider>
    , app);