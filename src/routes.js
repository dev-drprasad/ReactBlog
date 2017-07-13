import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsList from './components/posts_list';
import PostCreate from './components/post_create';
import PostDetail from './components/post_detail';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsList} />
		<Route path="posts/create" component={PostCreate} />
		<Route path="posts/:id" component={PostDetail} />
	</Route>
);