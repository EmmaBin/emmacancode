import React from 'react';
import SPEC from '../../assets/spec.png';
import quiz from '../../assets/quiz.png';
import skyfall from '../../assets/skyfall.png';
import dimsum from '../../assets/dumsum.png';
import movie from '../../assets/movie.png';
import './projects.css';


const Projects = () => {

    return (
        <div className='projects-list'>
            {/* Project 1 */}
            <div className='project'>
                <div className='project-image'>
                    <img src={SPEC} alt="SPEC homepage" />
                </div>
                <div className='project-details'>
                    <h3>SPEC homepage</h3>
                    <p>Contract Work utilized React and Tailwind</p>
                    <div className='project-buttons'>
                        <a href="https://specollective.org/" target="_blank" rel="noopener noreferrer">Live Page</a>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className='project'>
                <div className='project-image'>
                    <img src={skyfall} alt="Skyfall" />
                </div>
                <div className='project-details'>
                    <h3>Skyfall</h3>
                    <p>Developed an interactive application with a team using React, showcasing asteroid data using the NASA API</p>
                    <div className='project-buttons'>
                        <a href="https://github.com/chingu-voyages/v45-tier2-team-27" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://team27-skyfall.netlify.app/" target="_blank" rel="noopener noreferrer">Live Page</a>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className='project'>
                <div className='project-image'>
                    <img src={quiz} alt="Quiz Game" />
                </div>
                <div className='project-details'>
                    <h3>Quiz Game</h3>
                    <p>Retrieve questions from the Quizzical Trivia API and display them to the user. React hooks and function components are used to render a quiz</p>
                    <div className='project-buttons'>
                        <a href="https://github.com/EmmaBin/quiz-react" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://stately-malasada-cfd990.netlify.app/" target="_blank" rel="noopener noreferrer">Live Page</a>
                    </div>
                </div>
            </div>

            {/* Project 4 */}
            <div className='project'>
                <div className='project-image'>
                    <img src={dimsum} alt="Dim Sum Guru" />
                </div>
                <div className='project-details'>
                    <h3>Dim Sum Guru</h3>
                    <p>A full-stack Online Food Ordering App. The website was built using Postgresql, Express, Node.js, React, and Firebase.</p>
                    <div className='project-buttons'>
                        <a href="https://github.com/EmmaBin/dimsum_guru" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;