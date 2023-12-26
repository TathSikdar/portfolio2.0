import { useEffect, useRef, useState } from "react";
import ParalaxSVGs from "../components/ParalaxSVGs";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const rocketRef = useRef(null);
  const groundRef = useRef(null);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  const handleMouseMove = (event: MouseEvent) => {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  };

  const calculateTranslateX = (layer: number) => {
    return (mouseX - window.innerWidth / 2) * layer * 0.005;
  };

  const calculateTranslateY = (layer: number) => {
    return 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-[99vw] h-[100vh] relative overflow-clip bg-scroll">
      <img src={ParalaxSVGs.bg.svg} className="z-0 paralax-layer" />
      <img
        src={ParalaxSVGs.stars.svg}
        className="z-[1] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.stars.layer
          )}px) translateY(${calculateTranslateY(ParalaxSVGs.stars.layer)}px)`,
        }}
      />
      <img
        src={ParalaxSVGs.backcloud.svg}
        className="z-[2] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.backcloud.layer
          )}px) translateY(${calculateTranslateY(
            ParalaxSVGs.backcloud.layer
          )}px)`,
        }}
      />
      {ParalaxSVGs.leftRightSVGs.map((pair) =>
        pair.map((image, isRight) => (
          <img
            src={image.svg}
            className={`${isRight ? "right" : "left"} paralax-layer`}
            style={{
              zIndex: image.layer,
              transform: `translateX(${calculateTranslateX(
                image.layer
              )}px) translateY(${calculateTranslateY(image.layer)}px)`,
            }}
          />
        ))
      )}
      <img
        src={ParalaxSVGs.rocket.svg}
        ref={rocketRef}
        className="z-[15] paralax-layer duration-200 top-1/2"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.rocket.layer
          )}px)`,
        }}
      />
      <img
        src={ParalaxSVGs.ground.svg}
        ref={groundRef}
        className="z-[16] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.ground.layer
          )}px) translateY(${calculateTranslateY(ParalaxSVGs.ground.layer)}px)`,
        }}
      />
      <img
        src={ParalaxSVGs.rocketcloud3.svg}
        className="z-[17] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.rocketcloud3.layer
          )}px) translateY(${calculateTranslateY(
            ParalaxSVGs.rocketcloud3.layer
          )}px)`,
        }}
      />
      <img
        src={ParalaxSVGs.rocketcloud2.svg}
        className="z-[18] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.rocketcloud2.layer
          )}px) translateY(${calculateTranslateY(
            ParalaxSVGs.rocketcloud2.layer
          )}px)`,
        }}
      />
      <img
        src={ParalaxSVGs.rocketcloud1.svg}
        className="z-[19] paralax-layer"
        style={{
          transform: `translateX(${calculateTranslateX(
            ParalaxSVGs.rocketcloud1.layer
          )}px) translateY(${calculateTranslateY(
            ParalaxSVGs.rocketcloud1.layer
          )}px)`,
        }}
      />
    </div>
  );
};

export default Hero;
