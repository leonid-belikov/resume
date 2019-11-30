import React from "react";
import { connect } from 'react-redux';
import css from "./Skills.module.css";
import SkillItem from "./SkillItem/SkillItem";

class Skills extends React.Component {

    onInputChange(e) {
        const value = e.target.value;
        this.props.inputChanged(value);
    }

    render() {

        const skills = this.props.skills.filter((skill) => {
            return skill.name.includes(this.props.searchRequest);
        }).map((skill) => {
            return (
                <SkillItem
                    name={skill.name}
                    img={skill.img}
                    descriptionText={skill.descriptionText}
                    key={skill.name}/>
            )
        });

        return (
            <div className={css.container}>
                <div className={css.find}>
                    <input
                        type="text"
                        value={this.props.searchRequest}
                        onChange={this.onInputChange.bind(this)}
                        className={css.findInput}
                        placeholder="Введите название технологии..."
                    />
                    <img className={css.img} src="https://img.icons8.com/ios-filled/50/000000/search.png" alt=""/>
                </div>
                <div className={css.skills}>
                    {skills}
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        skills: state.skillsPage.skills,
        searchRequest: state.skillsPage.searchRequest
    }),
    dispatch => ({
        inputChanged: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value})
        }
    })
)(Skills);
