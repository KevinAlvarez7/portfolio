"use client"; // Add this directive at the top

import React, { useRef } from "react";
import Card from "./Card";
import thinkingwithCamera from "../../../assets/images/aboutMe/profile2.JPG";
import hugecrowd from "../../../assets/images/aboutMe/profile1.JPG";
import resume from "../../../assets/images/Resume_Image.png";
import askgovRedesign from "../../../assets/images/projects/askGovRedesign/AskGov_Hero_Image.png";

const Cards: React.FC = () => {
  const containerRef = useRef(null); // Reference to constrain the drag area

  return (
    <div className="absolute inset-0 z-10 w-full h-full" ref={containerRef}>
      {/* Render multiple Card components with different properties */}
      <Card
        containerRef={containerRef}
        src={thinkingwithCamera}
        alt="thinkingwithCamera"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src={hugecrowd}
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src={askgovRedesign}
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="40%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src={resume}
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

export default Cards;
