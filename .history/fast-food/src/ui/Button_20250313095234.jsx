import React from "react";

function Button({ children }) {
  return (
    <button className="rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">
      {children}
    </button>
  );
}

export default Button;
