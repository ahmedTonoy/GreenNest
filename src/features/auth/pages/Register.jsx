import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../app/providers/auth/AuthContext";
import { toast } from "react-toastify";
import authErrorHandler from "../utils/authErrorHandler";
import PasswordInput from "../components/PasswordInput";

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUser(email, password);
      const registeredUser = await updateUser({
        displayName: name,
        photoURL: photoURL,
      });
      toast.success(`Welcoming ${registeredUser.displayName} to our platform`);
      navigate("/");
    } catch (error) {
      setError(authErrorHandler(error));
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm p-5 shadow-2xl">
      <h2 className="text-xl font-semibold mb-5 text-center">
        Register Your Account
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="Enter your name"
            required
          />
          <label className="label">Photo URL</label>
          <input
            name="url"
            type="text"
            className="input w-full"
            placeholder="Insert photo URL"
            required
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          {error && <p className="text-xs font-semibold text-error">{error}</p>}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="mt-1 text-xs font-semibold text-center">
          Already have an account ?{" "}
          <Link to="/auth/login">
            <span className="text-secondary hover:text-primary font-bold link link-hover">
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
