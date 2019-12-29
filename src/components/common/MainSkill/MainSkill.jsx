import React from 'react';
import css from './MainSkill.module.css';

const MainSkill = (props) => {
    return (
        <div className={css.container}>
            <img src={props.img} alt={props.name} className={css[props.name]}/>
        </div>
    )
};

export default MainSkill;
