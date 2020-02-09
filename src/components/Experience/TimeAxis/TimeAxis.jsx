import React from "react";
import { connect } from 'react-redux';
import css from "./TimeAxis.module.css";
import YearItem from "./YearItem/YearItem";

const TimeAxis = (props) => {

    const years = props.exp.map((item) => {
        return (
            <YearItem
                selected={item.year === props.selectedYear}
                year={item.year}
                key={item.year}/>
       )
    });

    return (
        <div className={css.container + ' timeAxis_container'}>
            {years}
        </div>
    )
}

export default connect (
    state => ({
        exp: state.expPage.exp,
        selectedYear: state.expPage.selectedYear,
    })
)(TimeAxis)