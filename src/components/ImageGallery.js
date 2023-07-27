import React, { useState, useEffect} from 'react';
import "../css/ImageGallery.css";

const ImageGallery = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (hovered) {
      intervalId = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1500); 
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [hovered, images.length]);

  useEffect(() => {
    if (!hovered) {
      setCurrentImage(0);
    }
  }, [hovered]);

  return (
    <div
      className="image-gallery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--current-image": currentImage }}
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageGallery;
