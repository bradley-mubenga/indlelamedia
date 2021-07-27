import React from 'react';

//Components
import { GreenButton } from '../buttons/buttons';

export default function CallToAction() {
    return (
        <section id="callToActionSection" className="p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p className="lead callToActionText">We provide crucial data that inform companies on the best candidates to approach for CSI/SED initiatives.</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
                        <GreenButton text={"How We Do It"} route={"/learn-more"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
