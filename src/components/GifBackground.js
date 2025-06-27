import React, { useEffect, useRef } from "react";
// We need to access gifler from the window object
const gifler = window.gifler;

const GifBackground = ({ src }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && typeof gifler === "function") {
      const animator = gifler(src).get((a) => {
        a.animate(canvasRef.current);
        a.setSpeed(50);
      });
      // This line is added to address the 'animator' is not used warning
      return () => animator.stop();
    }
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
    ></canvas>
  );
};

export default GifBackground;
