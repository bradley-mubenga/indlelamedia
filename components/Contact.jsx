import React from 'react'

export default function Contact() {
    return (
        <section>
            <div className="col-12">
                <form className="d-flex">
                    <p>Name</p>
                    <input name="name" />

                    <p>Number</p>
                    <input name="number" />

                    <p>Email</p>
                    <input name="number" />
                </form>
            </div>
        </section>
    )
}
