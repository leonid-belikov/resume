import React from 'react';
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
        <div className={css.container + ' skillItem_container'} id={props.name}>
            <div className={css.icon + ' skillItem_icon'}>
                <img src={props.img} alt={props.name} className={css.img + ' skillItem_img'}/>
            </div>
            <div className={css.description + ' skillItem_description'}>
                <h3 className={css.title + ' skillItem_title'}>{props.name.toUpperCase()}</h3>
                <ul className={css.scale + ' skillItem_scale'}>
                    {scaleItems}
                </ul>
                <div className={css.text + ' skillItem_text'}>{props.descriptionText}</div>
            </div>
        </div>
    )
};

export default SkillItem;
