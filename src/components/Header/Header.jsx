import React from 'react';
import css from './Header.module.css';
import Clock from "../Clock/Clock";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
			<Clock/>
			<div className={css.nav}>
                <NavLink className={css.item} activeClassName={css.active} to="/profile">Профиль</NavLink>
                <NavLink className={css.item} activeClassName={css.active} to="/dialogs">Сообщения</NavLink>
                <NavLink className={css.item} activeClassName={css.active} to="/test">Тесты</NavLink>
            </div>
		</div>
    )
};

export default Header;
