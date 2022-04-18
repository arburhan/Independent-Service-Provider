import React from 'react';
import ar from '../../../images/ar.jpg';

const About = () => {
    return (
        <div className='text-center container'>
            <h2 className='mt-3 mb-5 text-danger'>About Me</h2>
            <div>
                <img src={ar} className="img-fluid" style={{ borderRadius: '50%', height: '400px', width: '400px' }} alt="" />
                <h3 className='py-4'>Hello I'm <span className='text-danger'>AR Burhan</span></h3>
                <p className=''>My goal is to become a full stack web developer. I have set a target to finish the basic lessons of becoming a web developer by this year. Either way or at any cost. So far I have finished html, css, bootstrap, js. Now I am learning to react. I love to learn.
                    I am ready to accept the greatest sacrifice of my life to be a full stack web developer. I am working hard for this goal regularly. In addition to the course I regularly use the help of google, stackoverflow, youtube etc to solve the problem.
                    Inshallah I will reach my goal. </p>
            </div>

        </div>
    );
};

export default About;