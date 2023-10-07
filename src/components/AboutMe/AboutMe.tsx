import './aboutme.css';
import portfolio from '../../assets/portfolio.jpeg';
import { FaPython, FaReact, FaGithub, } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPostgresql, SiDjango, SiTypescript, SiFlask } from 'react-icons/si';
import { TbHtml } from 'react-icons/tb';
import { PiFileCss } from 'react-icons/pi';

const AboutMe = () => {
    return (
        <div className='about_container'>

            <div className='introduction'>

                <div className='description animate__animated animate__backInDown'>
                    <h2 className="greeting">
                        👋 Hi, my name is Emma 👋
                    </h2>

                    I'm a Software Developer based in the San Francisco Bay Area.
                    I come from a diverse professional background, having worked as a Frontend Developer contractor,
                    a Homeroom Teacher at SFUSD, and a Flight Attendant with Singapore Airlines.
                    <br></br>
                    <br></br>
                    Currently, I'm actively learning to code and have built this site to showcase what I've learned after
                    completing the Hackbright Academy coding bootcamp.
                </div>
                <div className='photo'>
                    <img src={portfolio} alt="Self portrait" />
                </div>
            </div>

            <div className='skills'>

                <div className="skill-icon">
                    <FaPython />
                </div>
                <div className="skill-icon">
                    <SiJavascript />
                </div>
                <div className="skill-icon">
                    <FaReact />
                </div>
                <div className="skill-icon">
                    <TbHtml />
                </div>
                <div className="skill-icon">
                    <SiFlask />
                </div>
                <div className="skill-icon">
                    <SiTypescript />
                </div>
                <div className="skill-icon">
                    <SiDjango />
                </div>
                <div className="skill-icon">
                    <SiPostgresql />
                </div>
                <div className="skill-icon">
                    <SiTailwindcss />
                </div>
                <div className="skill-icon">
                    <PiFileCss />
                </div>
                <div className="skill-icon">
                    <FaGithub />
                </div>
            </div>
        </div>
    )
}

export default AboutMe;