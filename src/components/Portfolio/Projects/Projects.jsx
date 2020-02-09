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
            <div className={css.container + ' projects_container'}>
                <div className={css.covers + ' projects_covers'}>
                    <div
                        className={css.arrowBox + ' projects_arrowToPrev ' + css.arrowToPrev}
                        data-idx={this.getPrev(selectedProject)}
                        onClick={this.onChangeSelectedProject.bind(this)}>
                        <div className={css.arrow + ' projects_arrow'}></div>
                    </div>
                    <div className={`current ${css.cover} projects_cover`}>
                        <img className={css.main + ' main'} src={currentImg} alt=""/>
                        <div className={css.links + ' projects_links'}>
                            {link && <a href={link} className={css.link} target='_blank' rel="noopener noreferrer" title='Перейти на сайт'>
                                <img src="/icons/link.png" alt="" width={24}/>
                            </a>}
                            <a href={src} className={css.src} target='_blank' rel="noopener noreferrer" title='Исходный код'>
                                <img src="/icons/code.png" alt="" width={30}/>
                            </a>
                        </div>
                    </div>
                    <div className={css.arrowBox + ' projects_arrowToNext ' + css.arrowToNext}
                        data-idx={this.getNext(selectedProject)}
                        onClick={this.onChangeSelectedProject.bind(this)}>
                        <div className={css.arrow + ' projects_arrow'}></div>
                    </div>
                </div>
                <div className={css.title + ' projects_title'}>
                    {title}
                </div>
                <div className={css.description + ' projects_description'}>
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
