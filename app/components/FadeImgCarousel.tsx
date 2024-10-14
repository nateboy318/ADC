"use client";
import React, { useState, useEffect } from 'react';

const FadeImageCarousel: React.FC<{ images: string[], interval?: number }> = ({ images, interval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayImage, setDisplayImage] = useState(images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Wait for fade out before changing image
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  useEffect(() => {
    setDisplayImage(images[currentImageIndex]);
    setTimeout(() => setIsTransitioning(false), 50); // Start fade in
  }, [currentImageIndex, images]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <img 
        src={displayImage} 
        alt="Carousel image" 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default FadeImageCarousel;