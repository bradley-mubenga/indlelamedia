//React & Next.js Modules
import React from 'react';
import Head from 'next/head';

//Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/home.js/Hero';
import CallToAction from '../components/home.js/CallToAction';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>

            <Navbar />
            
            <main>
                <HeroSection />
                <CallToAction />
            </main>
        </>
    )
}