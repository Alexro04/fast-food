import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function Footer() {
  const totalPizzaQuantity = useSelector(getTotalCartQuantity);
  return (
    <div className="flex justify-between bg-stone-800 px-3 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-2 font-semibold text-stone-300 sm:space-x-6">
        <span>25 pizzas</span>
        <span>$76.00</span>
      </p>
      <Link to="/cart" className="tracking-widest">
        open cart &rarr;
      </Link>
    </div>
  );
}

export default Footer;
