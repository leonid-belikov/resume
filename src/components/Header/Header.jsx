import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header + ' header'}>
			<nav className={css.nav + ' header_nav'}>
                <NavLink className={css.item + ' header_item'} activeClassName={css.active} to="/profile">Профиль</NavLink>
                <NavLink className={css.item + ' header_item'} activeClassName={css.active} to="/skills">Навыки</NavLink>
                <NavLink className={css.item + ' header_item'} activeClassName={css.active} to="/experience">Опыт</NavLink>
                <NavLink className={css.item + ' header_item'} activeClassName={css.active} to="/portfolio">Портфолио</NavLink>
            </nav>
		</div>
    )
};

export default Header;
