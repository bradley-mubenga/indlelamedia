import React, { useState, useEffect } from 'react';
//
import Image from 'next/image';
import Link from 'next/link';
//
import Contact from './Contact';


//
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
                    <Image src={navbarClass ? "/indlela-media-logo-color.png" : "/indlela-media-logo-white.png"} className="img-fluid" width="184px" height="53px" alt="Indlela Media Logo" />
                </a>

                <button className={navbarClass ? "navbar-toggler togglerBlack" : "navbar-toggler togglerWhite" } type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item p-2">
                            <Link href="#aboutSection">
                                <a className="nav-link" aria-current="page">About</a>
                            </Link>
                        </li>

                        <li className="nav-item p-2">
                            <Link href="/contact">
                                <a className="nav-link" aria-current="page">Contact</a>
                            </Link>
                        </li>

                        <li className="nav-item p-2">
                            <Link href="/">
                                <a className="nav-link" aria-current="page"></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
