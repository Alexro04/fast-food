import { Link } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-16 text-center text-stone-800">
      <h1 className="mb-6 px-4 text-xl font-semibold sm:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
