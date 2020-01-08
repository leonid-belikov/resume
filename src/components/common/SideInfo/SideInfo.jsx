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
					width={item.smallStyle.width}
					height={item.smallStyle.height}
					top={item.smallStyle.top}
					left={item.smallStyle.left}
                    small={true}
					key={item.name}/>
			)
		});

        return (
            <div className={css.container}>
                <div className={css.nameWrap}>
                    <NavLink className={css.link} to="/profile">
                        <div className={css.name}>Леонид Беликов</div>
                    </NavLink>
                </div>
                <div className={css.avatar}>
                    <Avatar
                        width="320"
                        borderVisible={false}
                    />
                </div>
                <div className={css.contactsWrap}>
                    <div className={css.contacts}>
                        {contacts}
                    </div>
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