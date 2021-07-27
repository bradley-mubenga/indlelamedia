//React & Next.js Modules
import React from 'react';
import Head from 'next/head';

//Components
import HeroSection from '../components/home.js/Hero';
import Navbar from '../components/Navbar';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>

            <Navbar />
            
            <main>
                <HeroSection />
                <div>
                    HELLO WORLD
                </div>
            </main>
        </>
    )
}