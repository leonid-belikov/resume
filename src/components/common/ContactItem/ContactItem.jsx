import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = (props) => {
    return (
        <div className={css.container + ' ' + css[props.name]}>
            <img src={props.img} alt={props.name}/>
        </div>
    )
};

export default ContactItem;
