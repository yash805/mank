// src/components/Collaborations.js
import React, { useEffect } from 'react';
import './Collaborations.css'; // Import the CSS file for styling

const imageUrls = [
    'https://via.placeholder.com/150', // Replace with actual image URLs
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
];

const Collaborations = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.image-item').forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="collaborations-container">
            <h1 className="collaborations-heading">Collaborations</h1>
            <div className="images-grid">
                {imageUrls.map((url, index) => (
                    <div key={index} className="image-item">
                        <img src={url} alt={`Collaboration ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collaborations;
