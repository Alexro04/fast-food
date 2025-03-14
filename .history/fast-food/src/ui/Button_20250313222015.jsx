import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, type, to }) {
  const base =
    "inline-block tracking-wide disabled:cursor-not-allowed rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 ";

  const style = {
    primary: base + "px-4 py-3 text-sm md:px-6 md:py-4",
    secondary:
      "inline-block tracking-wide disabled:cursor-not-allowed rounded-full bg-stone-300 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2",
    small: base + "px-4 py-2 text-xs md:px-5 md:py-2.5",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
