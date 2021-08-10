import React from 'react';
//
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-5 container">
            <div className="text-center">
            <Image src={"/indlela-media-logo-color.png"} className="img-fluid" width="184px" height="53px" alt="Indlela Media Logo" />

                <div className="row py-3">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <Link href="/"><a className="LinkColor lead">Home</a></Link>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <Link href="#aboutSection"><a className="LinkColor lead">About</a></Link>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <Link href="/contact"><a className="LinkColor lead">Contact</a></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
