// src/components/Impact.js
import React from 'react';
import './Impact.css';
import oneImage from './images/WhatsApp Image 2024-12-31 at 9.04.48 AM (1).jpeg';
import twoImage from './images/WhatsApp Image 2024-12-31 at 9.04.48 AM (2).jpeg';

const Impact = () => {
    return (
        <div className="impact-container">
            <h1 className="impact-heading">Our Impact</h1>
            <div className="impact-images">
                <img src={oneImage} alt="Left Side" className="impact-image-left" />
                <img src={twoImage} alt="Right Side" className="impact-image-right" />
            </div>
            <div className="impact-text">
                <p>
                GenZScience has the potential to significantly impact young learners by:
                <br />   <br />
	Inspiring Future Scientists: Sparking curiosity in STEM fields.  <br />
	Enhancing Scientific Literacy: Making complex concepts accessible and fun.  <br />
	Bridging the Gap: Connecting classroom education with real-world applications.  <br />
	Developing Critical Thinking: Encouraging problem-solving and analytical skills.  <br />
	Promoting STEM Careers: Exposing students to various career possibilities in science.  <br />
	Fostering Innovation: Creating an environment that nurtures new ideas.  <br />
	Community Impact: Providing enriching educational opportunities locally.  <br />
	Personal Growth: Developing leadership and communication skills.  <br />
	Encouraging Collaboration: Facilitating teamwork among young learners.  <br />
	Creating Lifelong Learners: Instilling a passion for continuous scientific exploration.  <br />

                </p>
            </div>
            <h2 className="vision-heading">Vision</h2>
            <div className="vision-text">
                <p>
                To ignite a passion for scientific exploration in young minds by providing engaging, hands-on learning experiences in biochemistry and biology. We envision a future where every child has the opportunity to discover the wonders of science, fostering curiosity, critical thinking, and a lifelong love for learning. Through innovative workshops and interactive activities, we aim to empower the next generation of scientists and innovators, making science accessible, exciting, and relevant to their lives
                </p>
            </div>
        </div>
    );
};

export default Impact;
