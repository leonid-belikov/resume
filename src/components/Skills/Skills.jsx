import React from "react";
import { connect } from 'react-redux';
import css from "./Skills.module.css";
import SkillItem from "./SkillItem/SkillItem";
import SideInfo from "../common/SideInfo/SideInfo";

class Skills extends React.Component {

    componentDidMount() {
        this.props.updateBackTitle('skills');
    }

    onInputChange(e) {
        const value = e.target.value;
        this.props.inputChanged(value);
    }

    render() {

        const frontendSkills = this.props.skills.filter((skill) => {
            return skill.name.includes(this.props.searchRequest) && skill.category === 'frontend';
        }).map((skill) => {
            return (
                <SkillItem
                    name={skill.name}
                    img={skill.img}
                    descriptionText={skill.descriptionText}
                    key={skill.name}/>
            )
        });

        const commandSkills = this.props.skills.filter((skill) => {
            return skill.name.includes(this.props.searchRequest) && skill.category === 'command';
        }).map((skill) => {
            return (
                <SkillItem
                    name={skill.name}
                    img={skill.img}
                    descriptionText={skill.descriptionText}
                    key={skill.name}/>
            )
        });

        const otherSkills = this.props.skills.filter((skill) => {
            return skill.name.includes(this.props.searchRequest) && skill.category === 'other';
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
                <div className={css.sideInfo}>
                    <SideInfo/>
                </div>
                <div className={css.skillsInfo}>
                    <div className={css.findWrap}>
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
                    </div>
                    <div className={css.skills}>
                        {frontendSkills.length > 0 &&
                            <div className={css.title}>Frontend</div>
                        }
                        {frontendSkills}
                        {commandSkills.length > 0 &&
                            <div className={css.title}>Командная разработка</div>
                        }
                        {commandSkills}
                        {otherSkills.length > 0 &&
                            <div className={css.title}>Смежные области</div>
                        }
                        {otherSkills}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        skills: state.skills,
        searchRequest: state.skillsPage.searchRequest
    }),
    dispatch => ({
        inputChanged: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: true})
        },
        updateBackTitle: (value) => {
            dispatch({type: 'CHANGE_BACKTITLE', payload: value, fromSearch: false})
        }
    })
)(Skills);
