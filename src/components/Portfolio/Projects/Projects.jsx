import React from 'react';
import { connect } from 'react-redux';
import css from './Projects.module.css';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.maxIdx = this.props.projects.length - 1;
    }

    getPrev(currentIdx) {
        return currentIdx === 0 ? this.maxIdx : currentIdx - 1;
    }

    getNext(currentIdx) {
        return currentIdx === this.maxIdx ? 0 : currentIdx + 1;
    }

    render() {

        const projects = this.props.projects;
        const selectedProject = this.props.selectedProject;

        const prevImg = projects[this.getPrev(selectedProject)].img;
        const currentImg = projects[selectedProject].img;
        const nextImg = projects[this.getNext(selectedProject)].img;

        const title = projects[selectedProject].title;
        const description = projects[selectedProject].description;

        return (
            <div className={css.container}>
                <div className={css.covers}>
                    <div className={css.prev + ' ' + css.cover}>
                        <img src={prevImg} alt=""/>
                    </div>
                    <div className={css.current + ' ' + css.cover}>
                        <img src={currentImg} alt=""/>
                    </div>
                    <div className={css.next + ' ' + css.cover}>
                        <img src={nextImg} alt=""/>
                    </div>
                </div>
                <div className={css.title}>
                    {title}
                </div>
                <div className={css.description}>
                    {description}
                </div>
            </div>
        )
    }
}

export default connect (
    state => ({
        projects: state.portfolioPage.projects,
        selectedProject: state.portfolioPage.selectedProject
    }),
    null
    // dispatch => ({
    //
    // })
)(Projects)