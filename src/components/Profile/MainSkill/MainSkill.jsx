import React from 'react';
import {HashLink} from "react-router-hash-link";
import css from './MainSkill.module.css';

const MainSkill = (props) => {
    return (
        <div className={css.container}>
            <HashLink to={{
                pathname: '/skills',
                hash: `#${props.name}`}}>
                <img src={props.img} alt={props.name} className={css[props.name] + ` mainSkill_${props.name}`}/>
            </HashLink>
        </div>
    )
};

export default MainSkill;
