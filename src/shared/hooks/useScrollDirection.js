import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let scrollDistance = 0;

    const scrollThreshold = 30;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsVisible(true);
        scrollDistance = 0;
        previousScrollY = currentScrollY;
        return;
      }

      const scrollDelta = currentScrollY - previousScrollY;

      if (scrollDelta > 0) {
        scrollDistance += scrollDelta;

        if (scrollDistance >= scrollThreshold) {
          setIsVisible(false);
          scrollDistance = 0;
        }
      } else if (scrollDelta < 0) {
        scrollDistance += scrollDelta;

        if (Math.abs(scrollDistance) >= scrollThreshold) {
          setIsVisible(true);
          scrollDistance = 0;
        }
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible;
};

export default useScrollDirection;
