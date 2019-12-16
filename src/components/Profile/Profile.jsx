import React from 'react';
import { connect } from 'react-redux';

import css from './Profile.module.css';
import Avatar from '../common/Avatar/Avatar';
import MainSkill from './MainSkill/MainSkill';
// import tagline from '../../tagline.svg';
// import sign from '../../sign_gray.svg';

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

		return (
			<div className={css.container}>
				<Avatar width="420"/>
				<div className={css.specialty}>Frontend web-разработчик</div>
				<div className={css.nameWrap}><div className={css.name}>Леонид Беликов</div></div>
				<div className={css.mainSkills}>
					<div className={css.mainSkillsWrap}>
						{mainSkills}
					</div>
				</div>
				{/*<img className={css.tagline} src={tagline} alt=''></img>*/}
				{/*<img className={css.sign} src={sign} alt=''></img>*/}
				{/*<div className={css.backTagline}>"Фронтенд - моя страсть!"</div>*/}
				<div className={css.contacts}>Контакты</div>
			</div>
		)
	}
}

export default connect(
	state => ({
		data: state.profilePage,
		skills: state.skills
	}),
	dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
	})
)(Profile);
