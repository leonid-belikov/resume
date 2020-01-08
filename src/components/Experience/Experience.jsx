import React from "react";
import { connect } from 'react-redux';
import css from "./Experience.module.css";
import SideInfo from "../common/SideInfo/SideInfo";
import TimeAxis from "./TimeAxis/TimeAxis";

class Experience extends React.Component {

    componentDidMount() {
        this.props.updateBackTitle('experience');
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.sideInfo}>
                    <SideInfo/>
                </div>
                <div className={css.mainInfo}>
                    <TimeAxis/>
                    <div className={css.expItemsWrap}>
                        <div className={css.expItems}>
                            expItems
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        selectedYear: state.expPage.selectedYear,
    }),
    dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
    })
)(Experience)
