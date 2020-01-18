import React from 'react';
import { connect } from 'react-redux';
import css from './Projects.module.css';
import './animation.css';

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

    onChangeSelectedProject(e) {
        const newCurrentIdx = parseInt(e.target.dataset.idx);
        this.props.changeSelectedProject(newCurrentIdx);
    }

    render() {

        const projects = this.props.projects;
        const selectedProject = this.props.selectedProject;

        const prevIdx = this.getPrev(selectedProject);
        const nextIdx = this.getNext(selectedProject);
        const prevImg = projects[prevIdx].img;
        const currentImg = projects[selectedProject].img;
        const nextImg = projects[nextIdx].img;

        const src = projects[selectedProject].src;
        const link = projects[selectedProject].link;
        const title = projects[selectedProject].title;
        const description = projects[selectedProject].description;

        return (
            <div className={css.container}>
                <div className={css.covers}>
                    <div className={`prev ${css.cover}`}>
                        <img
                            src={prevImg}
                            alt=""
                            data-idx={prevIdx}
                            data-direction='back'
                            onClick={this.onChangeSelectedProject.bind(this)}
                        />
                    </div>
                    <div className={`current ${css.cover}`}>
                        <img
                            className={css.main}
                            src={currentImg}
                            alt=""
                        />
                        <div className={css.links}>
                            <a href={src} className={css.src} target='_blank'>
                                <img src="/icons/code.png" alt="" width={30}/>
                            </a>
                            <a href={link} className={css.link} target='_blank'>
                                <img src="/icons/link.png" alt="" width={24}/>
                            </a>
                        </div>
                    </div>
                    <div className={`next ${css.cover}`}>
                        <img
                            src={nextImg}
                            alt=""
                            data-idx={nextIdx}
                            data-direction='forward'
                            onClick={this.onChangeSelectedProject.bind(this)}
                        />
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
    dispatch => ({
        changeSelectedProject: value => {
            dispatch({type: 'CHANGE_PROJECT', payload: value})
        }
    })
)(Projects)