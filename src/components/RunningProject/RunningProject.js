import React from 'react';
import './RunningProject.css'
import manWithPc from '../../images/Illustration/20 [Converted]@2x.png'

const RunningProject = () => {
    return (
        <div className='container mb-5 pb-5 mt-5 pt-5'>
            <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-5 mb-3'>
                    <img src={manWithPc} className='img-fluid' alt="illustration-img" />
                </div>
                <div className='col-md-6 mb-3'>
                    <h1>Stay Running {'&'} Project</h1>
                    <p
                        style={{ color: '#8D8D8D' }}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <button className="btn-custom text-white btn px-4 py-3 mt-3">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RunningProject;