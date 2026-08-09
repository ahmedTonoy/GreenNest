import MyNavLink from "../ui/MyNavLink";
import brandLogo from "../../../assets/brand-logo.png";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

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

  const links = (
    <>
      <MyNavLink to="/" end>
        Home
      </MyNavLink>
      <MyNavLink to="/plants">Plants</MyNavLink>
      <MyNavLink to="/profile">My Profile</MyNavLink>
    </>
  );
  return (
    <>
      <div style={{ height: navbarHeight }} />
      <div
        ref={navbarRef}
        className={`fixed top-0 left-0 z-50 w-full bg-base-100 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar container bg-base-100 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-5 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-30 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="text-2xl text-primary font-bold">
              <span className="flex items-center justify-between gap-1">
                <img
                  className="w-10 h-10 md:w-15 md:h-15"
                  src={brandLogo}
                  alt="Brand Logo"
                />{" "}
                <p>
                  Green
                  <span className="text-accent">
                    Nest
                    <span className="text-base-content text-sm align-super font-bold">
                      ®
                    </span>
                  </span>
                </p>
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-3">
            <a className="btn w-20 btn-outline border-primary hover:bg-base-100 hidden md:inline-flex">
              Register
            </a>
            <a className="btn w-20 btn-primary">Login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
