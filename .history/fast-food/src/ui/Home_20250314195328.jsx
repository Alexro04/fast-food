import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";

function Home() {
  const username = useSelector((store) => store.user.username);
  return (
    <div className="my-16 text-center text-stone-800">
      <h1 className="mb-6 px-4 text-xl font-semibold sm:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username && (
        <div className="space-y-4 text-lg text-stone-800 md:text-xl">
          <p>
            Welcome{" "}
            <span className="t font-semibold uppercase tracking-wider">
              {username}
            </span>
            . Check out our menu by clicking the link below
          </p>
          <Button type="primary" to="/menu">
            Visit Menu
          </Button>
        </div>
      )}
      {!username && <CreateUser />}
    </div>
  );
}

export default Home;
