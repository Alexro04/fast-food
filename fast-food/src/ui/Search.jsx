import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <i className="fas fa-search absolute left-2"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search orders #..."
        className="duration- rounded-md bg-yellow-100 py-2 pl-8 pr-4 transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-56 sm:focus:w-72 sm:focus:ring"
      />
    </form>
  );
}

export default Search;
