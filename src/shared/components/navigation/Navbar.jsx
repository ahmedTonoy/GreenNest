import MyNavLink from "../ui/MyNavLink";
import brandLogo from "../../../assets/brand-logo.png";

const Navbar = () => {
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
    <div className="bg-base-100">
      <div className="navbar container bg-base-100 border px-0">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
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
  );
};

export default Navbar;
