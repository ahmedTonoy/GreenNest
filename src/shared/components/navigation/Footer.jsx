import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import brandLogo from "../../../assets/brand-logo.png";

const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer footer-center grid-flow-row md:grid-flow-col md:place-items-start md:text-left container text-neutral-content pt-10">
        <aside className="md:place-items-start">
          <Link to="/">
            <div className="flex gap-2 items-center mb-2 bg-base-100 p-1 rounded-lg">
              <img className="w-8" src={brandLogo} alt="App Logo" />
              <p className="text-2xl text-primary font-bold">
                Green
                <span className="text-accent">
                  Nest
                  <span className="text-base-content text-sm align-super font-bold">
                    ®
                  </span>
                </span>
              </p>
            </div>
          </Link>
          <p className="md:max-w-100">
            <span className="font-bold">GreenNest</span>, your ultimate online
            destination for bringing vibrant, fresh nature directly into your
            living space. Beyond the greenery, GreenNest provides stylish,
            modern pots that seamlessly complement your home decor, alongside
            simple, easy-to-follow care guides.
          </p>
        </aside>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Services</h6>
          <a className="link link-hover">Plants & Care Tips</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Consult Plant Experts</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-center">
          <h6 className="font-medium text-xl text-white mb-2">Information</h6>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav className="md:place-items-start md:justify-self-end">
          <h6 className="font-medium text-xl text-white mb-2">Social Links</h6>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faXTwitter}
              ></FontAwesomeIcon>
            </span>
            @GreenNest
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
            </span>
            @GreenNest
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faFacebookF}
              ></FontAwesomeIcon>
            </span>
            @GreenNest
          </a>
          <a className="link link-hover">
            <span className="p-0.5 rounded-full bg-white mr-1">
              <FontAwesomeIcon
                className="text-black"
                icon={faEnvelope}
              ></FontAwesomeIcon>
            </span>
            support@GreenNest
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center text-neutral-content mt-0 py-5">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            GreenNest
            <span className="text-sm align-super font-bold">®</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
