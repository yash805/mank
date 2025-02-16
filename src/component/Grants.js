// src/components/Grants.js
import React from 'react';
import './Grants.css'; // Import the CSS file for styling

const grantsData = [
    {
        imageUrl: 'https://via.placeholder.com/300x200', // Replace with actual image URLs
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id gravida justo. Quisque auctor auctor magna, nec laoreet eros condimentum et. Nulla facilisi. Duis tincidunt fermentum erat, ac suscipit ipsum consequat vel.'
    }
];

const Grants = () => {
    return (
        <div className="grants-container">
            <h1 className="grants-heading">Grants</h1>
            <div className="grants-grid">
                {grantsData.map((grant, index) => (
                    <div key={index} className="grant-item">
                        <img src={grant.imageUrl} alt={`Grant ${index + 1}`} />
                        <p>{grant.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grants;
