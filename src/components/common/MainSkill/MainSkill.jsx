import React from 'react';
import css from './MainSkill.module.css';

const MainSkill = (props) => {

    const smallClass = props.small ? ` ${css.small}` : '';

    return (
        <div className={css.container}>
            <img src={props.img} alt={props.name} className={css[props.name] + smallClass}/>
        </div>
    )
};

export default MainSkill;
