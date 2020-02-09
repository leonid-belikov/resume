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
                    level={skill.level}
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
                    level={skill.level}
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
                    level={skill.level}
                    key={skill.name}/>
            )
        });

        const backendSkills = this.props.skills.filter((skill) => {
            return skill.name.includes(this.props.searchRequest) && skill.category === 'backend';
        }).map((skill) => {
            return (
                <SkillItem
                    name={skill.name}
                    img={skill.img}
                    descriptionText={skill.descriptionText}
                    level={skill.level}
                    key={skill.name}/>
            )
        });

        return (
            <div className={css.container + ' skills_container'}>
                <div className={css.sideInfo + ' skills_sideInfo'}>
                    <SideInfo/>
                </div>
                <div className={css.mainInfo + ' skills_mainInfo'}>
                    <div className={css.findWrap + ' skills_findWrap'}>
                        <div className={css.find}>
                            <input
                                type="text"
                                value={this.props.searchRequest}
                                onChange={this.onInputChange.bind(this)}
                                className={css.findInput + ' skills_findInput'}
                                placeholder="Введите название технологии..."
                            />
                            <img className={css.img + ' skills_img'} src="https://img.icons8.com/ios-filled/50/000000/search.png" alt=""/>
                        </div>
                    </div>
                    <div className={css.skillsWrap}>
                        <div className={css.skills + ' skills'} id="skills">
                            {frontendSkills.length > 0 &&
                                <div className={css.title + ' skills_title'}>Frontend</div>
                            }
                            {frontendSkills}
                            {commandSkills.length > 0 &&
                                <div className={css.title + ' skills_title'}>Командная разработка</div>
                            }
                            {commandSkills}
                            {backendSkills.length > 0 &&
                                <div className={css.title + ' skills_title'}>Backend</div>
                            }
                            {backendSkills}
                            {otherSkills.length > 0 &&
                                <div className={css.title + ' skills_title'}>Смежные области</div>
                            }
                            {otherSkills}
                        </div>
                    </div>
                </div>
                <div className={css.btnToTop + ' skills_btnToTop'}><a href="#skills"><img src="/icons/toTop.png" alt=""/></a></div>
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
