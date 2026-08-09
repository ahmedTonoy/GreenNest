import { useEffect, useRef, useState } from "react";

const useNavbarHeight = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    const updateHeight = () => {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(navbar);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { navbarRef, navbarHeight };
};

export default useNavbarHeight;
