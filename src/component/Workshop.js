import React, { useState } from 'react';
import whi from './images/whitelap.png';
import Navbar from './Navbar';
import './Workshop.css';

const videoIds = [
  'B3-CcyzdIqE', // Example video IDs (replace with your own)
  'BbqpWzhO4tw',
  'FZfv_vXqf0s',
  'OnqYnJAWii8',
  'WVXIq5RcyDM',
  '7o2SarlCfbA',
];

const Workshop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoIds.length) % videoIds.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };

  return (
    <div>
      <Navbar />
      <div className="event-pictures-containers">
        <div className="carousels">
          <button className="carousel-arrow prevs" onClick={handlePrevClick}>
            &#10094;
          </button>

          <div className="carousel-video-wrappers">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoIds[currentIndex]}`}
              title={`Video ${currentIndex + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <button className="carousel-arrow nexts" onClick={handleNextClick}>
            &#10095;
          </button>
        </div>
        <img src={whi} alt="Centered Background" className="background-images" />
      </div>

      {/* Added missing closing div tag */}
      <div className="video-grid-section">
        <h2 className="grid-heading">More Videos</h2>
        <div className="video-grid">
          {videoIds.map((videoId, index) => (
            <div className="video-grid-item" key={index}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Grid Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshop;
