import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
			<div className={css.nav}>
                <NavLink className={css.item} activeClassName={css.active} to="/profile">Профиль</NavLink>
                <NavLink className={css.item} activeClassName={css.active} to="/skills">Навыки</NavLink>
                <NavLink className={css.item} activeClassName={css.active} to="/experience">Творческий путь</NavLink>
                <NavLink className={css.item} activeClassName={css.active} to="/portfolio">Портфолио</NavLink>
            </div>
		</div>
    )
};

export default Header;
