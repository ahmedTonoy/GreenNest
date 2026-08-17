import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../app/providers/auth/AuthContext";

const Register = () => {
  const { user, createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  console.log("Out of submit:", user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoURL = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUser(email, password);
      await updateUser({ displayName: name, photoURL: photoURL });
      navigate("/");
    } catch (error) {
      console.log(error.message);
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
            className="input"
            placeholder="Enter your name"
            required
          />
          <label className="label">Photo URL</label>
          <input
            name="url"
            type="text"
            className="input"
            placeholder="Insert photo URL"
            required
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />
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
