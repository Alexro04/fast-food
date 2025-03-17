import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

function Header() {
  const username = useSelector((store) => store.user.username);

  return (
    <header className="flex items-center justify-between bg-yellow-400 px-3 py-4 sm:px-6">
      <Link
        to="/"
        className="whitespace-nowrap text-lg font-semibold uppercase tracking-wider sm:tracking-widest md:text-xl"
      >
        Robonious Pizza
      </Link>
      <Search />
      {username && (
        <p className="hidden text-base font-semibold uppercase sm:block md:text-lg">
          {username}
        </p>
      )}
    </header>
  );
}

export default Header;
