import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../app/providers/auth/AuthContext";
import isValidEmail from "../utils/emailFormatValidator";
import { toast } from "react-toastify";
import authErrorHandler from "../utils/authErrorHandler";
import PasswordInput from "../components/PasswordInput";

const Login = () => {
  const { logIn, googleSignIn, resetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { user: loggedInUser } = await logIn(email, password);
      toast.success(`Welcome back ${loggedInUser.displayName}!`);
      navigate(`${location.state ? location.state : "/"}`);
    } catch (error) {
      console.log(error.message);
      setError(authErrorHandler(error));
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      const { user: loggedInUser } = await googleSignIn();
      navigate(`${location.state ? location.state : "/"}`);
      toast.success(`Welcome ${loggedInUser.displayName}!`);
    } catch (error) {
      setError(authErrorHandler(error));
    }
  };

  const handleResetPassword = async () => {
    setError("");
    if (!email) {
      setError("Please provide email to reset password");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter valid email format");
      return;
    }

    try {
      await resetPassword(email);

      if (email.endsWith("@gmail.com")) {
        const gmailURL = "https://mail.google.com/";
        window.open(gmailURL, "_blank", "noopener,noreferrer");
      } else {
        toast.info(
          "Please check your inbox or spam folder for password reset email",
        );
      }
    } catch (error) {
      setError(authErrorHandler(error));
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm p-5 shadow-2xl">
      <h2 className="text-xl font-semibold mb-5 text-center">
        Login Your Account
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {error && <p className="text-xs font-semibold text-error">{error}</p>}
          <div>
            <a onClick={handleResetPassword} className="link link-hover">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-2 border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </fieldset>

        <p className="mt-1 text-xs font-semibold text-center">
          Don't have an account ?{" "}
          <Link to="/auth/register">
            <span className="text-secondary hover:text-primary font-bold link link-hover">
              Register
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
