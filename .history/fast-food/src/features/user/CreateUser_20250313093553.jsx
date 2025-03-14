import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button className="rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase text-stone-800">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
