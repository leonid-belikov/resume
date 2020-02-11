import React from 'react';
import { connect } from 'react-redux';
import {HashLink} from "react-router-hash-link";
import css from './YearItem.module.css';

class YearItem extends React.Component {

    onChangeSelectedYear(e) {
        const year = parseInt(e.target.getAttribute('year') || e.target.parentNode.getAttribute('year'));
        this.props.changeSelectedYear(year);
    }

    render() {

        const activeStyle = this.props.selected ? `${css.selected} yearItem_selected` : '';
        const year = this.props.year;

        return (
            <HashLink  to={{
                pathname: '/experience',
                hash: '#expTop'}}
                className={css.link + ' yearItem_link ' + activeStyle}>
                <div
                    year={year}
                    className={css.container + ' yearItem_container'}
                    onClick={this.onChangeSelectedYear.bind(this)}>
                    <div className={css.yearNum + ' yearItem_yearNum'}>
                        {year}
                    </div>
                </div>
            </HashLink>
        )
    }

}

export default connect (
    null,
    dispatch => ({
        changeSelectedYear: (value) => {
            dispatch({type: 'CHANGE_YEAR', payload: value})
        }
    })
)(YearItem);
