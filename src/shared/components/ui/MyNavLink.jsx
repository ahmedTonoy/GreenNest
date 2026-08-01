import { NavLink } from "react-router";

export default function MyNavLink({ to, children, ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) => `
        relative py-2 mr-6 font-medium transition-colors duration-300 ease-in-out group
        ${isActive ? "text-primary" : "hover:text-primary"}
      `}
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-in-out
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </>
      )}
    </NavLink>
  );
}
