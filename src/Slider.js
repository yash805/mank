import React, { useState } from 'react';
import './Slider.css';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibility = 5; 

    const movies = [
        { id: 1, title: "Avengers: Endgame", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
        { id: 2, title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
        { id: 3, title: "Spider-Man: No Way Home", poster: "https://image.tmdb.org/t/p/w500/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg" },
        { id: 4, title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
        { id: 5, title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
        { id: 6, title: "Pulp Fiction", poster: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg" },
        { id: 7, title: "The Lord of the Rings", poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
        { id: 8, title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
    ];

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex < movies.length - visibility) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="slider-container">
            <button className="prev-button" onClick={goToPrevious}>
                &#10094;
            </button>
            <div className="slider-content">
                {movies.slice(currentIndex, currentIndex + visibility).map((movie, index) => (
                    <div className="movie-card" key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />
                        <h2>{movie.title}</h2>
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={goToNext}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
