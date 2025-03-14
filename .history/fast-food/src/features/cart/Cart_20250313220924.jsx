import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetable",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3 text-stone-800">
      <Link to="/menu" className="text-blue-500" font-semibold>
        &larr; Back to menu
      </Link>

      <h2 className="my-8 text-xl font-semibold">Your cart, %NAME%</h2>
      <ul className="divide-y">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
      <div>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
