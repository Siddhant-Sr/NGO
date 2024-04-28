import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentImageIndex !== null) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImageIndex, images, selectedImageIndex]);

  return (
    <div className="slider-container">
      {images.slice(0, 1).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="slider-image"
          onClick={() => openModal(index)}
        />
      ))}
      {currentImageIndex !== null && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          {selectedImageIndex !== 0 && (
            <span className="prev" onClick={prevImage}>&lt;</span>
          )}
          {selectedImageIndex !== images.length - 1 && (
            <span className="next" onClick={nextImage}>&gt;</span>
          )}
          <img
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
