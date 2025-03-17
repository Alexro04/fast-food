import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import DeleteButton from "../../ui/DeleteButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;

  return (
    <li className="flex grow items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-lg">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <div className="flex gap-4 font-semibold">
        <p>{formatCurrency(quantity * unitPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />
        <DeleteButton pizzaId={item.pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
