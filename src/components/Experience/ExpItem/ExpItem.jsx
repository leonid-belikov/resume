import React from 'react';
import css from './ExpItem.module.css';

const ExpItem = (props) => {

    const icons = props.skills.map((item) => {
        return (
            <img src={item} alt="" width={30} height={30} key={item}/>
        )
    });

    const description = props.description.map((item, index) => {
       return (
           <p key={index}>{item}</p>
       )
    });

    return (
        <div className={css.container + ' expItem_container'}>
            <div className={css.title + ' expItem_title'}>
                {props.title}
            </div>
            <div className={css.subtitle}>
                {
                    icons.length > 0 &&
                    <div className={css.skills}>
                        {icons}
                    </div>
                }
                <div className={css.period}>
                    {props.period}
                </div>
            </div>
            <div className={css.description + ' expItem_description'}>
                {description}
            </div>
        </div>
    )
};

export default ExpItem;
