import React from 'react';
import { CSSTransition } from "react-transition-group";
import './animation.css';
import css from './SkillIcon.module.css';

class SkillIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            in: false
        };
    }

    componentDidMount() {
        this.setState({
            in: true
        });
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.icon}>
                    <CSSTransition
                        timeout={0}
                        in={this.state.in}
                        classNames="skillIcon">
                        <img src={this.props.img} alt={this.props.name} className={`${this.props.name}-icon ${css.img}`}/>
                    </CSSTransition>
                    <svg viewBox="0 0 160 160" className={css.svg}>
                        <CSSTransition
                            timeout={0}
                            in={this.state.in}
                            classNames={this.props.name}>
                            <circle r="60" cx="80" cy="80" className={css.circle}/>
                        </CSSTransition>
                    </svg>
                </div>
            </div>
        )
    }
}

export default SkillIcon;
