import { Link } from "react-router";

const HeroCTA = ({ button, variant }) => {
  if (!button) return null;

  const className = `btn min-w-37 ${variant}`;

  if (button.type === "route") {
    return (
      <Link to={button.to} className={className}>
        {button.text}
      </Link>
    );
  }

  if (button.type === "anchor") {
    return (
      <a href={button.to} className={className}>
        {button.text}
      </a>
    );
  }

  return null;
};

export default HeroCTA;
