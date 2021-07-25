import React from 'react'
import { GreenButton, BlueButton } from '../buttons/buttons'

export default function Hero() {
    return (
        <section id="heroSection" className="d-flex align-items-center text-center">
            <div className="container">
                <div className="row">
                    <h1 id="heroText">Find the best NPO for your next CSI initiative</h1>

                    <div id="heroButtons">
                        <BlueButton text={"Learn More"} route={"/about"}/>
                        <GreenButton text={"Consultation"} route={"/about"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

