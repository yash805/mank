import React from 'react';
import './AboutUs.css'; // Import the external CSS file
import Navbar from './Navbar';
import profile from './images/profile.jpeg';

const AboutUs = () => {
    return (
        <>
          <Navbar />
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-content">
                {/* Left side: 400 words */}
                <div className="about-text">
                    <p>
                    As a passionate student at Woodbridge Academy Magnet School, I am dedicated to advancing scientific education for young learners. My mission is to inspire curiosity and provide engaging opportunities in biochemistry and scientific exploration.
Through GenZScience, I create interactive workshops that help children discover the excitement of hands-on scientific learning. By designing immersive experiences, I aim to spark enthusiasm for biology and chemistry among the next generation of curious minds.
My academic journey at Woodbridge Academy, a specialized magnet school focused on biomedical sciences and allied health, provides me with a strong foundation to pursue these educational goals. The school's rigorous program prepares students like myself for future careers in STEM, with a particular emphasis on hands-on, real-world problem-solving approaches.
By developing workshops and interactive learning experiences, I'm committed to making science accessible, engaging, and fun for young students.

                    </p>
                    <p>
                        
                    </p>
                </div>

                {/* Right side: Image and name */}
                <div className="about-image-container">
                    <img
                        src={profile}
                        alt="Person"
                        className="about-image"
                    />
                    <p className="about-name">Shinaya Jain</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;
