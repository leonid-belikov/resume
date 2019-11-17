import React from 'react';
import css from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
	return (
		<div className={css.container}>
			<ProfileInfo data={props.data.userInfo}/>
			<Posts data={props.data.posts}/>
		</div>
	)
};

export default Profile;
