import { useEffect, useState } from "react";

const useResize = ({
  size = 1024,
  callBack = () => null,
  orientation = "portrait",
}) => {
  const [matchMediaQuery, setMatchMediaQuery] = useState({
    size: false,
    orientation: false,
  });

  useEffect(() => {
    const onResize = () => {
      const match = {
        size: window.matchMedia(`screen and (max-width: ${size}px)`).matches,
        orientation: window.matchMedia(
          `screen and (orientation: ${orientation})`
        ).matches,
      };

      callBack(match);
      setMatchMediaQuery(match);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return matchMediaQuery;
};

export { useResize };
