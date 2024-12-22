"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";

interface AnimatedCursorProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) => {
  // State болон рефүүд
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const animateOuterCursor = useCallback(() => {
    if (cursorOuterRef.current) {
      const dx =
        coords.x - parseFloat(cursorOuterRef.current.style.left || "0");
      const dy = coords.y - parseFloat(cursorOuterRef.current.style.top || "0");
      cursorOuterRef.current.style.transform = `translate(${dx / 8}px, ${
        dy / 8
      }px)`;
    }
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [coords]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [animateOuterCursor]);

  const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
    }
  }, []);

  const onMouseEnter = () => setIsVisible(true);
  const onMouseLeave = () => setIsVisible(false);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseMove]);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`fixed rounded-full pointer-events-none bg-[rgba(${color},${outerAlpha})] transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${outerSize}px`,
          height: `${outerSize}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={cursorInnerRef}
        className={`fixed rounded-full pointer-events-none bg-[rgba(${color},1)] transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: `${innerSize}px`,
          height: `${innerSize}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default AnimatedCursor;
