import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={css.navbar}>
			<NavLink className={css.item} activeClassName={css.active} to="/profile">Профиль</NavLink>
			<NavLink className={css.item} activeClassName={css.active} to="/dialogs">Сообщения</NavLink>
			<NavLink className={css.item} activeClassName={css.active} to="/test">Тесты</NavLink>
		</div>
    )
};

export default Navbar;
