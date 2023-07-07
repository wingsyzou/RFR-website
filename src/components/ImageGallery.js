import React, { useState} from 'react'
import "../css/ImageGallery.css"

const ImageGallery = ({images}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    )
  }

  return (
    <div className="image-gallery">
      <button className="arrow left-arrow" onClick={previousImage}>
        &#8249;
      </button>
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      <button className="arrow right-arrow" onClick={nextImage}>
        &#8250;
      </button>
    </div>
  )
}

export default ImageGallery
