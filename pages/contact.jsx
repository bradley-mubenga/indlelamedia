import React, { useState } from 'react';

import { GreenButton } from '../components/buttons/buttons';

import Navbar from '../components/Navbar';

export default function Contact() {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        e.target.reset()

        let prospectData = {
            name,
            phoneNumber,
            email
        };

        //Send Data To A Server To Send Email
        console.log(prospectData);
    }

    return (
        <>
            <Navbar />
            <section className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-5 mb-4 rounded-3" id="jumboTron">
                    <div className="container-fluid py-5 text-center">
                        <h1 className="processH1">Consultation Form</h1>
                        <p className="col-md-12 callToActionText text-center">Please fill in the necessary information in the form below and we will get back to you in 24hrs time. Looking forward to helping you create impact in this world.</p>
                    </div>
                </div>

                <div className="container col-12 col-lg-6 col-xl-4 py-5">
                    <form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <p className="lead p-0 m-0 mb-1">Name</p>
                        <input name="name" className="mb-3 inputStyle" onChange={(e) => setName(e.target.value)}/>

                        <p className="lead p-0 m-0 mb-1">Number</p>
                        <input name="number" className="mb-3 inputStyle" onChange={(e) => setPhoneNumber(e.target.value)}/>

                        <p className="lead p-0 m-0 mb-1">Email</p>
                        <input name="number" className="mb-3 inputStyle" onChange={(e) => setEmail(e.target.value)}/>

                        <GreenButton text={'Submit'}/>
                    </form>
                </div>
            </section>
        </>
    )
}
