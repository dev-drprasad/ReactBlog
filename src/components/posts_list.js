import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsList extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	renderPostsList() {
		return this.props.posts.map((post) => {
			return (
				<li key={post.id} className="list-group-item">
					<Link to={'posts/' + post.id}>
						<small className="pull-xs-right">{post.categories}</small>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}



	render() {
		return(
			<div>
				<div className="text-xs-right">
					<Link to="posts/create" className="btn btn-primary">create post</Link> 
				</div>
				<div>
					<h3>Lists of posts</h3>
					<ul className="list-group">
						{this.renderPostsList()}
					</ul>
				</div>
			</div>
		);
	}
}

function mapToStateToProps(state) {
	return { posts: state.posts.all };
}

export default connect(mapToStateToProps, { fetchPosts })(PostsList);