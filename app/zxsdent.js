/**
 * Created by 1 on 2016/5/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactADD from 'react-addons';
require('babel-polyfill');
import { createStore ,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { syncHistoryWithStore,routerMiddleware } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router,Route,Link,hashHistory,IndexRoute} from 'react-router';
import {ZxsdReducer} from 'reducers/ZxsdReducer';

import App from 'modules/App';
import UnslContainer from 'component/unsl/UnslContainer';
import SlingContainer from 'component/sling/SlingContainer';
import SledContainer from 'component/sled/SledContainer';
import SledComponent from 'component/sled/SledComponent';
import NotslContainer from 'component/notsl/NotslContainer';
import NotslComponent from 'component/notsl/NotslComponent';
import ApplyDetailComponent from 'component/ApplyDetailComponent';
import WdSelectComponent from 'component/WdSelectComponent';

import { getUnslListRequest }  from 'actions/index';
require('css/base.css');
require('css/iconfont.css');
require('css/component.less');
require('css/app.less');


injectTapEventPlugin();

// Apply the middleware to the store
const middleware = routerMiddleware(hashHistory);
/*创建store*/
const store = createStore(
    ZxsdReducer,
    applyMiddleware(middleware,thunkMiddleware,createLogger())
);

store.dispatch(getUnslListRequest());

const history = syncHistoryWithStore(hashHistory,store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={UnslContainer} />
                <Route path="unsl" component={UnslContainer}></Route>
                <Route path="sling" component={SlingContainer}></Route>
                <Route path="sled" component={SledContainer}></Route>
                <Route path="notsl" component={NotslContainer}></Route>
            </Route>
            <Route path="wdselect" component={WdSelectComponent}></Route>
            <Route path="sledm" component={SledComponent}></Route>
            <Route path="notslm" component={NotslComponent}></Route>
            <Route path="detail" component={ApplyDetailComponent}></Route>
        </Router>
    </Provider>
    ,document.getElementById('app'));