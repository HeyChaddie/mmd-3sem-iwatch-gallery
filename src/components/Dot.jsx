"use client";
import "../app/globals.css";

const Dot = ({ color, relatedImage, setActiveWatch, activeWatch }) => {
  return (
    <div
      onClick={() => setActiveWatch(relatedImage)}
      style={{ backgroundColor: color }}
      className={`cursor-pointer w-10 h-10 rounded-full ${activeWatch == relatedImage ? "border-2" : ""}`}
    ></div>
  );
};

export default Dot;
