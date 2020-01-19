import React from "react";
import { connect } from 'react-redux';
import css from "./Experience.module.css";
import SideInfo from "../common/SideInfo/SideInfo";
import TimeAxis from "./TimeAxis/TimeAxis";
import ExpItem from "./ExpItem/ExpItem";

class Experience extends React.Component {

    componentDidMount() {
        this.props.updateBackTitle('experience');
    }

    getIconUrlBySkillName(name) {
        const skills = this.props.skills;
        const skillInfo = skills.filter((item) => {
            return item.name === name;
        });
        let url = null;
        if (skillInfo && skillInfo.length === 1) {
            url = skillInfo[0].img;
        }
        return url;
    }

    render() {

        const year = this.props.selectedYear;
        const yearInfo = this.props.exp.filter((item) => {
            return item.year === year;
        });
        if (yearInfo && yearInfo.length === 1) {
            const stages = yearInfo[0].stages.map((item) => {
                const skills = item.skills.map((item) => {
                    return this.getIconUrlBySkillName(item);
                });
                return Object.assign({}, item, {skills});
            });
            const expItems = stages.map((item, index) => {
                return (
                    <ExpItem
                        title={item.title}
                        period={item.period}
                        skills={item.skills}
                        description={item.description}
                        key={item.title}
                    />
                )
            });

            return (
                <div className={css.container}>
                    <div className={css.sideInfo}>
                        <SideInfo/>
                    </div>
                    <div className={css.mainInfo}>
                        <TimeAxis/>
                        <div className={css.expItemsWrap}>
                            <div className={css.expItems} id="expTop">
                                {expItems}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default connect (
    state => ({
        selectedYear: state.expPage.selectedYear,
        exp: state.expPage.exp,
        skills: state.skills,
    }),
    dispatch => ({
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
    })
)(Experience)
