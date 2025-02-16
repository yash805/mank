// src/components/IconsSection.js
import React from 'react';
import { FaFlask, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import './IconsSection.css';

const IconsSection = () => {
    return (
        <div className="icons-section-container">
            <div className="icons-row">
                <div className="icon-item science-icon">
                    <div className="icon-container">
                        <div className="hexagon">
                            <FaFlask className="icon" />
                        </div>
                    </div>
                    <div className="text-container">
                        <p className="icon-text">Scientific research drives innovation and discoveries in various fields.</p>
                    </div>
                </div>
                <div className="icon-item person-icon">
                    <div className="icon-container">
                        <div className="hexagon">
                            <FaUser className="icon" />
                        </div>
                    </div>
                    <div className="text-container">
                        <p className="icon-text">Community engagement fosters collaboration and strengthens societal bonds.</p>
                    </div>
                </div>
                <div className="icon-item location-icon">
                    <div className="icon-container">
                        <div className="hexagon">
                            <FaMapMarkerAlt className="icon" />
                        </div>
                    </div>
                    <div className="text-container">
                        <p className="icon-text">Global presence ensures widespread impact and outreach across regions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconsSection;
