import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from 'next/image'; // Import StaticImageData type

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string | StaticImageData; // Allow both string and StaticImageData types
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}


const Card: React.FC<CardProps> = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0); // State to manage the z-index of the card

  // Function to update the z-index when the card is clicked (drag started)
  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex} // Update z-index on mouse down to bring the card to the front
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4", // Default classes
        className // Merge with any additional classes passed via props
      )}
      src={typeof src === 'string' ? src : src.src} // Use src.src if src is StaticImageData
      alt={alt}
      drag // Enable dragging
      dragConstraints={containerRef} // Constrain dragging to the container
      dragElastic={0.65} // Apply elasticity to the drag
    />
  );
};

export default Card;
