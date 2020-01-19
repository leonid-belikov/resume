import React from 'react';
import css from './MainSkill.module.css';

const MainSkill = (props) => {
    return (
        <div className={css.container}>
            <a href={`/skills#${props.name}`}>
                <img src={props.img} alt={props.name} className={css[props.name]}/>
            </a>
        </div>
    )
};

export default MainSkill;
