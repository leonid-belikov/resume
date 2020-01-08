import React from 'react';
import { connect } from 'react-redux';
import css from './YearItem.module.css';

class YearItem extends React.Component {

    onChangeSelectedYear(e) {
        const year = parseInt(e.target.getAttribute('year') || e.target.parentNode.getAttribute('year'));
        this.props.changeSelectedYear(year);
    }

    render() {

        const activeStyle = this.props.selected ? css.selected : '';
        const year = this.props.year;

        return (
            <div
                year={year}
                className={css.container + ' ' + activeStyle}
                style={{width: this.props.width}}
                onClick={this.onChangeSelectedYear.bind(this)}>
                <div className={css.yearNum}>
                    {year}
                </div>
            </div>
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