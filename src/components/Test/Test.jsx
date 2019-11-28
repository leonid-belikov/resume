import React from "react";
import { connect } from 'react-redux';
import css from "./Test.module.css";
import SkillIcon from "./SkillIcon/SkillIcon";

class Test extends React.Component {
    render() {

        const skills = this.props.skills.map((skill, index) => <SkillIcon name={skill.name} img={skill.img} key={index}/>)

        return (
            <div className={css.container}>
                <div className={css.task}>
                    {skills}
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        skills: state.testPage.task_2
    })
)(Test);
