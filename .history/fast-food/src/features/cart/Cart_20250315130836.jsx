import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "./cartSlice";

function Cart() {
  // const cart = fakeCart;
  const cart = useSelector((store) => store.cart.cart);
  const username = useSelector((store) => store.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 text-stone-800">
      <Link to="/menu" className="font-semibold text-blue-500">
        &larr; Back to menu
      </Link>

      <h2 className="mt-8 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="my-6 divide-y divide-stone-200 border-y">
        {cart.map((item) => (
          <div className="flex items-center justify-between" key={item.pizzaId}>
            <CartItem item={item} />
            <Button
              type="small"
              onClick={() => dispatch(deleteItem(item.pizzaId))}
            >
              delete
            </Button>
          </div>
        ))}
      </ul>
      <div className="space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
