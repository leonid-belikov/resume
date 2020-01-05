import React from "react";
import { connect } from 'react-redux';
import css from "./Portfolio.module.css";
import SideInfo from "../common/SideInfo/SideInfo";

class Portfolio extends React.Component {

    componentDidMount() {
        this.props.updateBackTitle('portfolio');
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.sideInfo}>
                    <SideInfo/>
                </div>
                <div className={css.mainInfo}>

                </div>
            </div>
        )
    }
}

export default connect (
    null,
    dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
    })
)(Portfolio)
