import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link to="/menu" className="text-blue-500" font-semibold>
        &larr; Back to menu
      </Link>

      <p className="mt-5 text-lg font-semibold text-stone-800">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
