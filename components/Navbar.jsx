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
        <nav class={navbarClass ? 'navbar navbar-expand-md navbar-dark fixed-top navActive navClass' : 'navbar navbar-expand-md navbar-dark fixed-top navNotActive'}>
            <div class="container">
                <a class="navbar-brand" href="#">
                    <Image src={navbarClass ? "/indlela-media-logo-color.png" : "/indlela-media-logo-white.png"} width="184px" height="53px" alt="Indlela Media Logo" />
                </a>

                <button class={navbarClass ? "navbar-toggler togglerBlack" : "navbar-toggler" } type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Partners</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
