import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/postsIndex';
import PostsNew from './components/postsNew';
import PostsShow from './components/postsShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  	<Provider store={createStoreWithMiddleware(reducers)}>
    	<BrowserRouter>
    		<div>
    			<Switch>
	    			<Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/:id" component={PostsShow} />
	    			<Route path="/" component={PostsIndex} />
    			</Switch>
    		</div>
    	</BrowserRouter>
  	</Provider>
  	, document.querySelector('.container'));