import React from "react";

function Button({ children, disabled, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2";

  const style = {
    primary: base + "px-4 py-3 text-sm",
    small: base + "w-20 py-1 text-xs",
  };

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
