import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [ navbarClass, setNavbarClass ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 177) {
                setNavbarClass(true);
            }
    
            else {
                setNavbarClass(false)
            }
        });
    });

    return (
        <nav className={navbarClass ? 'navbar navbar-expand-md navbar-dark fixed-top navActive navclassName' : 'navbar navbar-expand-md navbar-dark fixed-top navNotActive'}>
            <div className="container">
                <a className="navbar-brand" href="#">

                    { /*TODO Make This Logo Width Responsive According To DOM Width And Logo px Ratio*/ }
                    <Image src={navbarClass ? "/indlela-media-logo-color.png" : "/indlela-media-logo-white.png"} width="184px" height="53px" alt="Indlela Media Logo" />
                </a>

                <button className={navbarClass ? "navbar-toggler togglerBlack" : "navbar-toggler togglerWhite" } type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Partners</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
