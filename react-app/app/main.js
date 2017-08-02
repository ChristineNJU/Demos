import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {  HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
import List from './pages/index.jsx';
import Detail from './pages/detail.jsx';
import NoMatch from './pages/NoMatch.jsx';

injectTapEventPlugin();

ReactDom.render((
    <MuiThemeProvider>
        <Router history={customHistory}>
            <Switch>
                <Route exact path="/" component={List}/>
                <Route path="/detail/:id" component={Detail} />
                <Route exact component={NoMatch}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
), document.getElementById('content'));


