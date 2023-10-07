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

    React.useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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
                        <div className='text-overlay'>
                            <div className='project-text'>
                                Contract Work
                                <br>
                                </br>React, Tailwind, Mobile-First, Formik & Yup library, Unit Testing
                                <br></br>
                                <a href="https://specollective.org/" target="_blank" rel="noopener noreferrer">SEE LIVE</a></div>
                        </div>
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={quiz} alt="quiz" />
                        <div className='text-overlay'>
                            <div className='project-text'>
                                Quizz App
                                <br>
                                </br>React,Trivia API
                                <br></br>
                                <a href="https://stately-malasada-cfd990.netlify.app/" target="_blank" rel="noopener noreferrer">SEE LIVE</a></div>
                        </div>
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'group') && (
                    <div className={`${currentFilter === 'all' ? 'small-img' : ''} ${currentFilter === 'group' ? 'group-projects-large-screen' : ''}`}>
                        <img src={skyfall} alt="skyfall" />
                        <div className='text-overlay'>
                            <div className='project-text'>
                                Skyfall
                                <br>
                                </br>JS, React, Tailwind, Jest Unit Testing, API
                                <br></br>
                                <a href="https://team27-skyfall.netlify.app/" target="_blank" rel="noopener noreferrer">SEE LIVE</a></div>
                        </div>
                    </div>
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={dimsum} alt="dimsum" />
                        <div className='text-overlay'>
                            <div className='project-text'>
                                Dim sum guru
                                <br>
                                </br>React, JS, Node.js, Express, PostgreSQL
                                <br></br>
                                <a href="https://github.com/EmmaBin/dimsum_guru" target="_blank" rel="noopener noreferrer">Github</a></div>
                        </div>
                    </div >
                )}
                {(currentFilter === 'all' || currentFilter === 'personal') && (
                    <div className={currentFilter === 'all' ? 'small-img' : ''}>
                        <img src={movie} alt="movie" />
                        <div className='text-overlay'>
                            <div className='project-text'>
                                Movie Watchlist
                                <br>
                                </br>JavaScript, OMDB API
                                <br></br>
                                <a href="https://jazzy-sawine-5d9be6.netlify.app/" target="_blank" rel="noopener noreferrer">SEE LIVE</a></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects;