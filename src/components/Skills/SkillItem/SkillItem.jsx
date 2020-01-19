import React from 'react';
import { CSSTransition } from "react-transition-group";
import './animation.css';
import css from './SkillItem.module.css';

const SkillItem = props => {

    const scaleItems = [];
    for (let i = 0; i < 6; i++) {
        let activeClass = i < props.level ? css.active : '';
        scaleItems.push(
            <li key={i} className={`${css.scaleItem} ${activeClass}`}></li>
        )
    }

    return (
        <div className={css.container} id={props.name}>
            <div className={css.icon}>
                <img src={props.img} alt={props.name} className={css.img}/>
            </div>
            <div className={css.description}>
                <h3 className={css.title}>{props.name.toUpperCase()}</h3>
                <ul className={css.scale}>
                    {scaleItems}
                </ul>
                <div className={css.text}>{props.descriptionText}</div>
            </div>
        </div>
    )
};

export default SkillItem;
