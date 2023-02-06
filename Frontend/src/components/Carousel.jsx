import { useEffect } from 'react';
import { useState } from 'react';
import { loginCarouselResources } from './../assets/resources';

export function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfinityScroll = () => {
        if (currentIndex === loginCarouselResources.length - 1) {
          return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          carouselInfinityScroll();
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <div className="carouselContainer d-flex flex-wrap-nowrap overflow-hidden ">
            {loginCarouselResources.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                  className="carousel d-flex align-items-center justify-content-center flex-direction-column"
                >
                  <div className="images">{item.img}</div>
                  <div className="title fz-20 fw-600 color-darkgray text-align-center">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
    )
}