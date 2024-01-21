import React from 'react'
import './footer.css'
import LinkedIn from '../icons/Linkedin';
import Github from '../icons/Github';
export const Footer = () => {
    return (
        <div>
            <div className="footer-text"> © 2023 | Coded with 💖 by Emma.</div>
            <div className='icons'>
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
        </div>

    )
}
