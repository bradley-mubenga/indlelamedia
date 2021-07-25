//React & Next.js Modules
import React from 'react';
import Head from 'next/head';

//Components
import Hero from '../components/home.js/Hero';

export default function Index() {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            
            <main>
                <Hero />
                <div>
                    HELLO WORLD
                </div>
            </main>
        </>
    )
}