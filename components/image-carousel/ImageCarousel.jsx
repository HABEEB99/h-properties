import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const ImageCarousel = ({ images }) => {
  return (
    <div className="relative max-w-screen-2xl mx-auto rounded-2xl ">
      {/* PROPERTY IMAGES */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
        className="rounded-lg object-cover"
      >
        {images.map((image) => (
          <div key={image.id} className="w-[100%] h-[70vh] rounded-2xl mt-3">
            <img
              className="object-contain w-[100%] "
              loading="lazy"
              src={image.url}
              alt="property-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
