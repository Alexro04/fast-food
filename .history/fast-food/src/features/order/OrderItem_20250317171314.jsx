import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-base">
        <p>
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
