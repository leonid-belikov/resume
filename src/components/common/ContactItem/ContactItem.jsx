import React from 'react';
import css from './ContactItem.module.css';

const ContactItem = (props) => {

    const smallClass = props.small ? `${css.small}` : `${css.normalSize}`;

    return (
        <div className={`${css.container} ${css[props.name]} ${smallClass}`} style={{top: props.top, left: props.left}}>
            <a href={props.link} target={props.link ? '_blank' : ''}>
                <img
                    src={props.img}
                    alt={props.name}
                    height={props.height}
                    width={props.width}
                />
            </a>
        </div>
    )
};

export default ContactItem;
