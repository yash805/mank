import React, { useState } from 'react';
import './EventPicture.css';
import one from './images/Event1 (1).jpeg';
import two from './images/Event1 (2).jpeg';
import three from './images/Event1 (3).jpeg';
import four from './images/Event1 (4).jpeg';
import five from './images/Event1 (5).jpeg';
import six from './images/Event1 (6).jpeg';
import seven from './images/Event1 (7).jpeg';
import eight from './images/Event1 (8).jpeg';

const images = [
one,
two,
three,
four,
five,
six,
seven,
eight
];

const EventPictures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Calculate the indices for the three visible images
  const getVisibleImages = () => {
    const totalImages = images.length;
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="event-pictures-container">
      <h1 className="event-heading">Event Pictures</h1>
      <div className="carousel">
        <button className="carousel-arrow prev" onClick={handlePrevClick}>
          &#10094;
        </button>

        {visibleImages.map((imageIndex, idx) => {
          const isCenter = idx === 1; // The second image is the center image
          return (
            <div
              key={imageIndex}
              className={`carousel-image-wrapper ${isCenter ? 'center' : ''}`}
            >
              <img
                src={images[imageIndex]}
                alt={`Slide ${imageIndex + 1}`}
                className="carousel-image"
              />
            </div>
          );
        })}

        <button className="carousel-arrow next" onClick={handleNextClick}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default EventPictures;
