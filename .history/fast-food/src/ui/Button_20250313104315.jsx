import React from "react";

function Button({ children, disabled }) {
  const base =
    "rounded-full bg-yellow-400 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2";

  const style = {
    primary: (base = "px-4 py-3"),
  };

  return (
    <button
      disabled={disabled}
      className="rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default Button;
