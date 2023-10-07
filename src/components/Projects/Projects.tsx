import React from 'react';
import SPEC from '../../assets/SPEC.png';
import quiz from '../../assets/quiz.png';
import skyfall from '../../assets/skyfall.png';
import dimsum from '../../assets/dumsum.png';
import movie from '../../assets/movie.png';
import './projects.css';


const Projects = () => {
    const [currentFilter, setCurrentFilter] = React.useState('all');
    const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 768);


    const handleFilter = (filter: 'all' | 'personal' | 'group') => {
        setCurrentFilter(filter);
    };
    return (
        <div className='projects'>
            <div className='projects_buttons'>
                <button
                    className={isSmallScreen ? 'small-button' : ''}
                    onClick={() => handleFilter('all')}>ALL PROJECTS</button>
                <button
                    className={isSmallScreen ? 'small-button' : ''}
                    onClick={() => handleFilter('personal')}>PERSONAL PROJECTS</button>
                <button
                    className={isSmallScreen ? 'small-button' : ''}
                    onClick={() => handleFilter('group')}>GROUP PROJECTS</button>
            </div>

            <div className='projects_img'>
                {(currentFilter === 'all' || currentFilter === 'group') && (
                    <div className={`${currentFilter === 'all' ? 'small-img' : ''} ${currentFilter === 'group' ? 'group-projects-large-screen' : ''}`}>
                        <img src={SPEC} alt="spec-project" />
                        <div className='overlay'>
                            <span className='text'>Contracting work - using React, Tailwind, mobile first responsive. <a href="http://your-live-link.com">Live Link</a></span>
                        </div>
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={quiz} alt="quiz" />
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'group') && (
                    <div className={`${currentFilter === 'all' ? 'small-img' : ''} ${currentFilter === 'group' ? 'group-projects-large-screen' : ''}`}>
                        <img src={skyfall} alt="skyfall" />
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={dimsum} alt="dimsum" />
                    </div >
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={movie} alt="movie" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects;