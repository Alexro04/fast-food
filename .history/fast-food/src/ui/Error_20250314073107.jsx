import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong 😢</h1>
      <p></p>
      <p className="my-4">{error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
