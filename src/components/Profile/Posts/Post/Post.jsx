import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
	return (
		<div post_id={props.postId} className={css.postItem}>
			{props.text}
		</div>
	)
};

export default Post;
