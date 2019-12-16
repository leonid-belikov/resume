import React from 'react';

import css from './Avatar.module.css';
import avatar from './avatar.png';

const Avatar = (props) => {
    return (
        <div className={css.container}>
            <img className={css.avatar} src={avatar} alt='' width={props.width}></img>
            <div className={css.border}></div>
        </div>
    )
};

export default Avatar;