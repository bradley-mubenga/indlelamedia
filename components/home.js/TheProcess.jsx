//
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TheProcess() {


    return (
        <section className="py-5">
            <div className="container text-center">
                <h1 className="processH1 pb-4">A Simple Process</h1>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3 processIconBox1">
                        <Image src="/1.Discovery.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid processIcon"/>
                        <h3 className="processIconH1">DISCOVERY</h3>
                        <p className="processIconText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta laboriosam voluptatem sed consequuntur. Exercitationem nulla doloribus possimus magnam!</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3 processIconBox2">
                        <Image src="/2. Alignment.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid"/>
                        <h3 className="processIconH1">ALIGNMENT</h3>
                        <p className="processIconText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta laboriosam voluptatem sed consequuntur. Exercitationem nulla doloribus possimus magnam!</p>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 py-3 processIconBox3">
                    <Image src="/3. Launch.png" width="325px" height="325px" alt="Indlela Media Logo" className="img-fluid"/>
                    <h3 className="processIconH1">LAUNCH</h3>
                    <p className="processIconText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta laboriosam voluptatem sed consequuntur. Exercitationem nulla doloribus possimus magnam!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
