import React, { useContext } from 'react';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <div
//       onClick={() => scrollPrev()}
//       className="flex items-center justify-center mr-1 text-btn cursor-pointer"
//     >
//       <BsFillArrowLeftSquareFill className="text-2xl" />
//     </div>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <div
//       onClick={() => scrollNext()}
//       className="flex items-center justify-center mr-1 cursor-pointer"
//     >
//       <BsFillArrowRightSquareFill className="text-2xl  text-btn" />
//     </div>
//   );
// };

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

{
  /*<ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: 'hidden' }}
    >
      {images.map((image) => (
        <div className="w-[910px] p-1" key={image.id}>
          <Image
            src={image.url}
            width={1000}
            height={500}
            placeholder="blur"
            blurDataURL={image.url}
            alt="property-image"
            sizes="(max-width:500px) 100px, (max-width:1023px ) 400px, 1000px"
          />
        </div>
      ))}
      </ScrollMenu>*/
}
