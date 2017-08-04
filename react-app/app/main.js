import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {  HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import createHashHistory from 'history/createBrowserHistory';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from './reducers';
const browserHistory = createHashHistory();
import List from './pages/index.jsx';
import Detail from './pages/detail.jsx';
import NoMatch from './pages/NoMatch.jsx';

injectTapEventPlugin();

let store = createStore(
    combineReducers({
        initialStaffs:reducers,
        // ...reducers,
        routing:routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory,store);
// console.log(history);


ReactDom.render((
    <MuiThemeProvider>
        <Provider store={store} >
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={List}/>
                    <Route path="/detail/:id" component={Detail} />
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        </Provider>
    </MuiThemeProvider>
), document.getElementById('content'));

history.listen(location => {
    console.log(window.location);
    console.log(location);
});
