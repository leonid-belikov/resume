import React from "react";
import { connect } from 'react-redux';
import css from "./TimeAxis.module.css";
import YearItem from "./YearItem/YearItem";

class TimeAxis extends React.Component {
    render() {

        const itemWidth = Math.round(100 / this.props.exp.length) - 1;

        const years = this.props.exp.map((item) => {
            return (
                <YearItem
                    selected={item.year === this.props.selectedYear}
                    year={item.year}
                    width={itemWidth + '%'}
                    key={item.year}/>
           )
        });

        return (
            <div className={css.container}>
                {years}
            </div>
        )
    }
}

export default connect (
    state => ({
        exp: state.expPage.exp,
        selectedYear: state.expPage.selectedYear,
    })
)(TimeAxis)