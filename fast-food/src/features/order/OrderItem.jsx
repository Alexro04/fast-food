import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, ingredients, isIngredientsLoading }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-2 px-2 py-3 sm:px-3 sm:py-4">
      <div className="flex items-center justify-between sm:text-base">
        <p className="font-semibold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="capitalize italic">
        {isIngredientsLoading ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
