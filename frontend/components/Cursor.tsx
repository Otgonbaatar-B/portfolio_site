"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const Cursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big") as HTMLElement;
    const smallBall = document.querySelector(
      ".cursor__ball--small"
    ) as HTMLElement;

    gsap.to(bigBall, {
      x: cursorPosition.x - 15,
      y: cursorPosition.y - 15,
      duration: 0.4,
    });
    gsap.to(smallBall, {
      x: cursorPosition.x - 5,
      y: cursorPosition.y - 5,
      duration: 0.1,
    });
  }, [cursorPosition]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-50">
      <div className="cursor__ball cursor__ball--big fixed">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" fill="white" />
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small fixed">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" fill="purple" />
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
