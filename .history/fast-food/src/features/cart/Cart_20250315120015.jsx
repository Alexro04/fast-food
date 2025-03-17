import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

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
  const username = useSelector((store) => store.user.username);

  return (
    <div className="px-4 py-3 text-stone-800">
      <Link to="/menu" className="text-blue-500" font-semibold>
        &larr; Back to menu
      </Link>

      <h2 className="mt-8 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="my-6 divide-y divide-stone-200 border-y">
        {cart.map((item) => (
          <div className="flex items-center justify-between">
            <CartItem item={item} />
            <Button type="small">delete</Button>
          </div>
        ))}
      </ul>
      <div className="space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
