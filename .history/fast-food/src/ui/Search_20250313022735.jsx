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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍Search orders #..."
        className="w-56 rounded-md bg-yellow-100 px-4 py-2 ring-yellow-100 transition-all duration-300 placeholder:text-stone-400 focus:outline-none sm:focus:w-72 sm:focus:ring"
      />
    </form>
  );
}

export default Search;
