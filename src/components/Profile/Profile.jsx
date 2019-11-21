import React from 'react';
import { connect } from 'react-redux';

import css from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

class Profile extends React.Component {
	render() {
		return (
			<div className={css.container}>
				<ProfileInfo data={this.props.data.userInfo}/>
				<Posts data={this.props.data.posts}/>
			</div>
		)
	}
}

export default connect(
	state => ({
		data: state.profilePage
	}),
	dispatch => ({})
)(Profile);
