import React from 'react'
import './sidebar.css'
import { RxRocket, RxSketchLogo, RxFace, RxGlobe } from 'react-icons/rx';



import { NavLink } from 'react-router-dom';



const Sidebar: React.FC = () => {

    return (
        <div className="container">
            <div className="link-wrapper">
                <NavLink to="/"
                    className={({ isActive }) =>
                        [
                            isActive ? "active" : null,
                        ]
                            .filter(Boolean)
                            .join(" ")
                    }>
                    <div className="icon-text-wrapper">
                        <h3><RxRocket /> <span> About Me</span></h3>
                    </div>
                   
                </NavLink>
            </div>

            <div className="link-wrapper">
                <NavLink to="/projects" className={({ isActive }) =>
                    [
                        isActive ? "active" : null,
                    ]
                        .filter(Boolean)
                        .join(" ")
                }>
                    <div className="icon-text-wrapper">
                    <h3><RxFace /> <span> Projects</span></h3>
                     </div>
                   
                </NavLink>
            </div>

            <div className="link-wrapper">
                <NavLink to="/experiences" className={({ isActive }) =>
                    [
                        isActive ? "active" : null,
                    ]
                        .filter(Boolean)
                        .join(" ")
                }>
                    <div className="icon-text-wrapper">
                    <h3><RxGlobe /> <span> Experiences</span></h3>
                    </div>
                    
                </NavLink>
            </div>
            <div className="link-wrapper">
                <NavLink to="/resume" className={({ isActive }) =>
                    [
                        isActive ? "active" : null,
                    ]
                        .filter(Boolean)
                        .join(" ")
                }>
                    <div className="icon-text-wrapper">
                    <h3><RxSketchLogo /> <span> Resume</span></h3>
                    </div>
                    
                </NavLink>
            </div>


        </div>
    );
};

export default Sidebar;