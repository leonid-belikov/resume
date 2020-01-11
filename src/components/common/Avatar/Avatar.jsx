import React from 'react';

import css from './Avatar.module.css';

const Avatar = (props) => {

    const borderDisplay = props.borderVisible ? 'block' : 'none';

    return (
        <div className={css.container}>
            <img className={css.avatar} src='/img/avatar.png' alt='' width={props.width}></img>
            <div className={css.border} style={{display: borderDisplay}}></div>
        </div>
    )
};

export default Avatar;