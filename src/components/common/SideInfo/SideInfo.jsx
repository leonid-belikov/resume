import React from 'react';
import { connect } from 'react-redux';
import css from './SideInfo.module.css';
import Avatar from "../Avatar/Avatar";
import ContactItem from "../ContactItem/ContactItem";
import {NavLink} from "react-router-dom";

class SideInfo extends React.Component {

    render() {

		const contacts = this.props.contacts.map((item) => {
			return (
				<ContactItem
					img={item.img}
					name={item.name}
					link={item.link}
					width='30'
					height='30'
                    small={true}
                    title={item.title}
					key={item.name}/>
			)
		});

        return (
            <div className={css.container + ' sideInfo_container'}>
                <div className={css.nameWrap + ' sideInfo_nameWrap'}>
                    <NavLink className={css.link} to="/profile">
                        <div className={css.name + ' sideInfo_name'}>Леонид Беликов</div>
                    </NavLink>
                </div>
                <div className={css.avatar}>
                    <Avatar
                        small={true}
                        img='/img/avatar_mini.png'
                        borderVisible={false}
                    />
                </div>
                <div className={css.contacts + ' sideInfo_contacts'}>
                    {contacts}
                </div>
            </div>
        )
    }

}

export default connect (
    state => ({
        skills: state.skills
		, contacts: state.contacts
    })
)(SideInfo);