import React from 'react';
import ReactDom from 'react-dom';
import {  HashRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
import List from './pages/index.jsx';
import Detail from './pages/detail.jsx';

ReactDom.render((
    <Router history={customHistory}>
        <div>
            <Route exact path="/" component={List}/>
            <Route path="/detail" component={Detail} />
        </div>
    </Router>
), document.getElementById('content'));


