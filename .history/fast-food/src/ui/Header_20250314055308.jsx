import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-400 px-3 py-4 sm:px-6">
      <Link
        to="/"
        className="whitespace-nowrap text-base font-semibold uppercase tracking-wider sm:tracking-widest"
      >
        Robonious Pizza
      </Link>
      <Search />
      <p className="hidden text-base font-semibold uppercase sm:block">
        Jonathan Joestar
      </p>
    </header>
  );
}

export default Header;
