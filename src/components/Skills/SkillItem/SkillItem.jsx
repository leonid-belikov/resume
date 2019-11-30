import React from 'react';
import { CSSTransition } from "react-transition-group";
import './animation.css';
import css from './SkillItem.module.css';

class SkillItem extends React.Component {
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
                    <svg viewBox="0 0 130 130" className={css.svg}>
                        <CSSTransition
                            timeout={0}
                            in={this.state.in}
                            classNames={this.props.name}>
                            <circle r="60" cx="65" cy="65" className={css.circle}/>
                        </CSSTransition>
                    </svg>
                </div>
                <div className={css.description}>
                    <h3 className={css.title}>{this.props.name.toUpperCase()}</h3>
                    <div className={css.text}>{this.props.descriptionText}</div>
                </div>
            </div>
        )
    }
}

export default SkillItem;
