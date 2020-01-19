import React from 'react';

import css from './Avatar.module.css';

const Avatar = (props) => {

    const borderDisplay = props.borderVisible ? 'block' : 'none';
    const smallClass = props.small ? css.small : '';

    return (
        <div className={css.container + ' ' + smallClass}>
            <img className={css.avatar} src={props.img} alt=''></img>
            <div className={css.border} style={{display: borderDisplay}}></div>
        </div>
    )
};

export default Avatar;