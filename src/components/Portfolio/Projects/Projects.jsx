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

    onChangeSelectedProject(e) {
        const newCurrentIdx = parseInt(e.target.dataset.idx || e.target.parentElement.dataset.idx);
        this.props.changeSelectedProject(newCurrentIdx);
    }

    render() {

        const projects = this.props.projects;
        const selectedProject = this.props.selectedProject;

        const currentImg = projects[selectedProject].img;

        const src = projects[selectedProject].src;
        const link = projects[selectedProject].link;
        const title = projects[selectedProject].title;
        const description = projects[selectedProject].description;

        return (
            <div className={css.container}>
                <div className={css.covers}>
                    <div
                        className={css.arrowBox + ' ' + css.arrowToPrev}
                        data-idx={this.getPrev(selectedProject)}
                        onClick={this.onChangeSelectedProject.bind(this)}>
                        <div className={css.arrow}></div>
                    </div>
                    <div className={`current ${css.cover}`}>
                        <img
                            className={css.main}
                            src={currentImg}
                            alt=""
                        />
                        <div className={css.links}>
                            {link && <a href={link} className={css.link} target='_blank' title='Перейти на сайт'>
                                <img src="/icons/link.png" alt="" width={24}/>
                            </a>}
                            <a href={src} className={css.src} target='_blank' title='Исходный код'>
                                <img src="/icons/code.png" alt="" width={30}/>
                            </a>
                        </div>
                    </div>
                    <div className={css.arrowBox + ' ' + css.arrowToNext}
                        data-idx={this.getNext(selectedProject)}
                        onClick={this.onChangeSelectedProject.bind(this)}>
                        <div className={css.arrow}></div>
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
