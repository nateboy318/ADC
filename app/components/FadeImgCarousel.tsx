"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import img1 from '../../public/1.png'
import img2 from '../../public/2.png'
import img3 from '../../public/3.png'
import img4 from '../../public/4.png'
import img5 from '../../public/5.png'

const FadeImageCarousel = ({ interval = 5000 }) => {
  const images = [img1, img2, img3, img4, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Wait for fade out before changing image
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  useEffect(() => {
    setTimeout(() => setIsTransitioning(false), 50); // Start fade in
  }, [currentImageIndex]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image 
        src={images[currentImageIndex]} 
        alt={`Carousel image ${currentImageIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className={`transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default FadeImageCarousel;