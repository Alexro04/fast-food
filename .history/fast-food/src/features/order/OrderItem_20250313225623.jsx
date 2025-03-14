import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="my-5">
      <div className="flex items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-lg">
        <p>
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>

    // <li >
    //   <p>
    //     <span className="font-semibold">{quantity}&times;</span> {name}
    //   </p>
    //   <div >
    //     <p>{formatCurrency(totalPrice)}</p>
    //   </div>
    // </li>
  );
}

export default OrderItem;
