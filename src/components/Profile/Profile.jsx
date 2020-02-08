import React from 'react';
import { connect } from 'react-redux';

import css from './Profile.module.css';
import Avatar from '../common/Avatar/Avatar';
import MainSkill from './MainSkill/MainSkill';
import ContactItem from '../common/ContactItem/ContactItem';

class Profile extends React.Component {
	componentDidMount() {
		this.props.updateBackTitle('profile');
	}

	render() {

		const mainSkills = this.props.skills.filter((skill) => skill.category === 'frontend').map((skill) => {
			return (
				<MainSkill
					img={skill.img}
					name={skill.name}
					key={skill.name}/>
			)
		});

		const contacts = this.props.contacts.map((item) => {
			return (
				<ContactItem
					img={item.img}
					name={item.name}
					link={item.link}
					width='35'
					height='35'
					title={item.title}
					key={item.name}/>
			)
		});

		return (
			<div className={css.container + ' profile_container'}>
				<div className={css.avatar + ' profile_avatar'}>
					<Avatar
						img='/img/avatar_3_2.png'
						borderVisible={true}
					/>
				</div>
				<div className={css.specialtyWrap + ' profile_specialtyWrap'}>
					<div className={css.internal + ' profile_internal'}>
						Frontend web-разработчик
					</div>
				</div>
				<div className={css.nameWrap + ' profile_nameWrap'}>
					<div className={css.name + ' ' + css.internal + ' profile_name profile_internal'}>Леонид Беликов</div>
				</div>
				<div className={css.mainSkillsWrap + ' profile_mainSkillsWrap'}>
					<div className={css.mainSkills + ' profile_mainSkills'}>
						{mainSkills}
					</div>
				</div>
				<div className={css.emailWrap}>
					<div className={css.internal + ' profile_internal'}>
						lifeisgym@gmail.com
					</div>
				</div>
				<div className={css.contactsWrap + ' profile_contactsWrap'}>
					<div className={css.contacts + ' profile_contacts'}>
						{contacts}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		data: state.profilePage
		, skills: state.skills
		, contacts: state.contacts
	}),
	dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
	})
)(Profile);
