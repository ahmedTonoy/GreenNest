import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm p-5 shadow-2xl">
      <h2 className="text-xl font-semibold mb-5 text-center">
        Login Your Account
      </h2>
      <form>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
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
