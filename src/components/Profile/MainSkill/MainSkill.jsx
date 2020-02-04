import React from 'react';
import {Link} from "react-router-dom";
import css from './MainSkill.module.css';

const MainSkill = (props) => {
    return (
        <div className={css.container}>
            <Link to={{
                pathname: '/skills',
                hash: `#${props.name}`}}>
                <img src={props.img} alt={props.name} className={css[props.name]}/>
            </Link>
        </div>
    )
};

export default MainSkill;
