import React from 'react';
import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

	const postItems = props.data.map( item => <Post key={item.id} postId={item.id} text={item.text}/> );

	return (
		<div className={css.container}>
			{postItems}
		</div>
	)
};

export default Posts;
