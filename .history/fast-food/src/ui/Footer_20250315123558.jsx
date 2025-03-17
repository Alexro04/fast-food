import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";
import { formatCurrency } from "../utils/helpers";

function Footer() {
  const totalPizzaQuantity = useSelector(getTotalCartQuantity);
  const totalPizzaPrice = useSelector(getTotalCartPrice);
  const cart = useSelector(getCart);

  if (!cart.length) return null;

  return (
    <div className="flex justify-between bg-stone-800 px-3 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-2 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>{formatCurrency(totalPizzaPrice)}</span>
      </p>
      <Link to="/cart" className="tracking-widest">
        open cart &rarr;
      </Link>
    </div>
  );
}

export default Footer;
