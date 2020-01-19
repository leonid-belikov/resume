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

	onMouseMoveHandler(e) {
		const x = e.pageX;
		const y = e.pageY;
		this.props.moveContactIcons({x, y});
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
					width={item.style.width}
					height={item.style.height}
					title={item.title}
					key={item.name}/>
			)
		});

		return (
			<div onMouseMove={this.onMouseMoveHandler.bind(this)} className={css.container}>
				<div className={css.avatar}>
					<Avatar
						img='/img/avatar_3_2.png'
						borderVisible={true}
					/>
				</div>
				<div className={css.specialty}>Frontend web-разработчик</div>
				<div className={css.nameWrap}><div className={css.name}>Леонид Беликов</div></div>
				<div className={css.mainSkillsWrap}>
					<div className={css.mainSkills}>
						{mainSkills}
					</div>
				</div>
				<div className={css.email}>lifeisgym@gmail.com</div>
				<div className={css.contacts}>
					<div className={css.contactsWrap}>
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
        },
        moveContactIcons: (value) => {
        	dispatch({type: 'MOVE_CONTACT_ICONS', payload: value})
		}
	})
)(Profile);
