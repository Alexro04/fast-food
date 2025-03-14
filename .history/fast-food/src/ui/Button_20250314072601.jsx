import React from "react";
import { Link } from "react-router-dom";

function Button({ children, disabled, type, to }) {
  const base =
    "inline-block h-fit tracking-wide disabled:cursor-not-allowed rounded-full transition-colors duration-300 font-semibold uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 ";

  const base_primary =
    base +
    "bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 ";

  const base_secondary =
    base +
    "bg-stone-200 text-stone-600 border border-stone-300 hover:bg-stone-800 hover:text-stone-200 focus:bg-stone-800 focus:text-stone-200 focus:ring-stone-800 ";

  const style = {
    primary: base_primary + "px-4 py-3 text-sm md:px-6 md:py-4",
    secondary: base_secondary + "px-4 py-3 text-sm md:px-6 md:py-4",
    small: base_primary + "px-4 py-2 text-xs md:px-5 md:py-2.5",
    circle: base_primary + "w-6 h-6",
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
