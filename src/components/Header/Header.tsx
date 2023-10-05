import React from 'react';
import LinkedIn from '../icons/Linkedin';
import Github from '../icons/Github';
import ThemeSwitcher from '../theme/ThemeSwitcher';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='header'>
            <div className="menu-icon" onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>


            <div className={`overlay ${isOpen ? 'open' : ''}`}>
                <div className="toggle">
                    <ThemeSwitcher />
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/binmaemma/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/EmmaBin" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                </div>
            </div>


            <div className='toggle'>
                <ThemeSwitcher />
            </div>

            <div className='icon'>
                <a href="https://www.linkedin.com/in/binmaemma/" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
            </div>
            <div className='icon'>
                <a href="https://github.com/EmmaBin" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
            </div>

        </div>
    )
}

export default Header;