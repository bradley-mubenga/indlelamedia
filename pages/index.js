//React & Next.js Modules
import React from 'react';
import Head from 'next/head';

//Components
import Navbar from '../components/Navbar';
import HeroSection from '../components/home.js/Hero';
import CallToAction from '../components/home.js/CallToAction';
import TheProcess from '../components/home.js/TheProcess';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>

            <Navbar />
            
            <main>
                <HeroSection />
                <CallToAction text={`We provide crucial data that inform companies on the best candidates to approach for CSI/SED initiatives.`} />
                <TheProcess />
                <CallToAction text={`Want to know how we can help you achive your CSI goals? Click the button below to book your consultation.`} buttonText={`Consultation`}/>
            </main>
        </>
    )
}