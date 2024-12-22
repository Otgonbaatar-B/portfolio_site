import React, { FC } from "react";

interface HoverableProps {
  children: React.ReactNode;
}

const Hoverable: FC<HoverableProps> = ({ children }) => {
  const onMouseEnter = () => {
    const bigBall = document.querySelector(".cursor__ball--big") as HTMLElement;
    gsap.to(bigBall, { scale: 4, duration: 0.3 });
  };

  const onMouseLeave = () => {
    const bigBall = document.querySelector(".cursor__ball--big") as HTMLElement;
    gsap.to(bigBall, { scale: 1, duration: 0.3 });
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};

export default Hoverable;
