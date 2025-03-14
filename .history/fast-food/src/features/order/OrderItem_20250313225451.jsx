import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>

    // <li className="flex items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-lg">
    //   <p>
    //     <span className="font-semibold">{quantity}&times;</span> {name}
    //   </p>
    //   <div className="font-semibold">
    //     <p>{formatCurrency(totalPrice)}</p>
    //   </div>
    // </li>
  );
}

export default OrderItem;
