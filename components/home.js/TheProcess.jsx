//
import React from 'react';
import Image from 'next/image';

export default function TheProcess() {
    return (
        <section className="py-5">
            <div className="container text-center">
                <h1 className="processH1 pb-4">A Simple Process</h1>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3">
                        <Image src="/1.Discovery.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid"/>
                        <h3>DISCOVERY</h3>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3">
                        <Image src="/2. Alignment.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid"/>
                        <h3>ALIGNMENT</h3>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3">
                    <Image src="/3. Launch.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid"/>
                    <h3>LAUNCH</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
