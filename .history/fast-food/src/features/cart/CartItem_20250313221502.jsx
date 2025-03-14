import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex items-center justify-between px-2 py-3 sm:text-base">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <div className="font-semibold">
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
