import MyNavLink from "../ui/MyNavLink";
import brandLogo from "../../../assets/brand-logo.png";
import useNavbarHeight from "../../hooks/useNavbarHeight";
import useScrollDirection from "../../hooks/useScrollDirection";
import { AuthContext } from "../../../app/providers/auth/AuthContext";
import { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Navbar = () => {
  const { navbarRef, navbarHeight } = useNavbarHeight();
  const isVisible = useScrollDirection();

  const { user, logOut } = use(AuthContext);

  const links = (
    <>
      <MyNavLink to="/" end>
        Home
      </MyNavLink>
      <MyNavLink to="/plants">Plants</MyNavLink>
      <MyNavLink to="/profile">My Profile</MyNavLink>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

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
          {user ? (
            <div className="navbar-end gap-3">
              <div className="p-1 rounded-full border border-primary">
                <img
                  className="w-11 h-11 rounded-full"
                  src={user.photoURL}
                  alt="User Profile Image"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="my-6 cursor-pointer">
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-fit text-right p-2 shadow-sm"
                >
                  <li>
                    <p className="justify-center text-center">
                      {user.displayName}
                    </p>
                  </li>
                  <li>
                    <button className="btn btn-error" onClick={handleLogOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end gap-3">
              <Link
                to="/auth/register"
                className="btn w-20 btn-outline border-primary hover:bg-base-100 hidden md:inline-flex"
              >
                Register
              </Link>
              <Link to="/auth/login" className="btn w-20 btn-primary">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
