import React from 'react';
import css from './Header.module.css';
import Clock from "../Clock/Clock";

const Header = () => {
    return (
        <div className={css.header}>
			<Clock/>
		</div>
    )
};

export default Header;
