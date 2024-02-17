import React from 'react';
import SPEC from '../../assets/spec.png';
import quiz from '../../assets/quiz.png';
import skyfall from '../../assets/skyfall.png';
import dimsum from '../../assets/dimsum.png';
import movie from '../../assets/movie.png';
import './projects.css';


const Projects = () => {

    return (
        <div className='projects-list'>
           
            <div className='project'>
                <div className='project-image'>
                    <img src={dimsum} alt="Dim Sum Guru" />
                </div>
                <div className='project-details'>
                    <h3>Dim Sum Guru</h3>
                    <p>An Online Food Ordering App, complete with full-stack capabilities and an administrative function, allows restaurant owners to modify the menu content. The website was built using <em>PostgreSQL, Express, Node.js, React, Firebase, Cloudinary API and OpenAI API</em>.</p>
                    <div className='project-buttons'>
                    <a className='link-btn' href="https://www.youtube.com/watch?v=8a9TqcAg3Ps&t=3s" target="_blank" rel="noopener noreferrer">DEMO VIDEO</a>
                        <a className='link-btn' href="https://github.com/EmmaBin/dimsum_guru" target="_blank" rel="noopener noreferrer">CODE</a>
                    </div>
                </div>
            </div>
          
            <div className='project'>
                <div className='project-image'>
                    <img src={SPEC} alt="SPEC homepage" />
                </div>
                <div className='project-details'>
                    <h3>SPEC organization homepage</h3>
                    <p>This home page was developed collaboratively with other developers and a designer, utilizing <em>React and Tailwind</em>. One of my responsibilities included implementing a customized contact form using <em>Formik and Yup</em>.</p>
                    <div className='project-buttons'>
                        <a className='link-btn' href="https://specollective.org/" target="_blank" rel="noopener noreferrer">SEE LIVE</a>
                    </div>
                </div>
            </div>

          
            <div className='project'>
                <div className='project-image'>
                    <img src={skyfall} alt="Skyfall" />
                </div>
                <div className='project-details'>
                    <h3>Skyfall</h3>
                    <p>This app is a group project designed to showcase asteroid data using the NASA API. We have utilized <em>React Router, Leaflet, and the Recharts API</em>.</p>
                    <div className='project-buttons'>
                        <a className='link-btn' href="https://team27-skyfall.netlify.app/" target="_blank" rel="noopener noreferrer">SEE LIVE</a>
                        <a className='link-btn' href="https://github.com/chingu-voyages/v45-tier2-team-27" target="_blank" rel="noopener noreferrer">CODE</a>

                    </div>
                </div>
            </div>

            <div className='project'>
                <div className='project-image'>
                    <img src={quiz} alt="Quiz Game" />
                </div>
                <div className='project-details'>
                    <h3>Quiz Game</h3>
                    <p>Retrieve questions from the <em>Quizzical Trivia API</em> and display them to the user. <em>React hooks and function components</em> are used to render a quiz.</p>
                    <div className='project-buttons'>
                        <a className='link-btn' href="https://stately-malasada-cfd990.netlify.app/" target="_blank" rel="noopener noreferrer">SEE LIVE</a>
                        <a className='link-btn' href="https://github.com/EmmaBin/quiz-react" target="_blank" rel="noopener noreferrer">CODE</a>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Projects;