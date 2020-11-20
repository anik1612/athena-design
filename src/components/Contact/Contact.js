import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className = 'container contact mt-5 mb-5'>
            <div className="text-center">
                <h2 className='mb-4'>Get Your design right now</h2>
                <p style={{color: '#8D8D8D'}}>Be the first know our latest offers and updates!</p>
            </div>
            <div className = 'row justify-content-center'>
                <div className="input-group mb-3 col-md-6 mt-4">
                    <input type="text" className="form-control" style={{height:'50px'}} placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn" type="button">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;