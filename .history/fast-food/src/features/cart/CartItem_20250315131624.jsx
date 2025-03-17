import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseQuantity,
  getTotalCartPrice,
  increaseQuantity,
} from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const totalPizzaPrice = useSelector(getTotalCartPrice);

  const dispatch = useDispatch();

  return (
    <li className="flex grow items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-lg">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <div className="flex gap-4 font-semibold">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="space-x-2 font-normal">
          <Button
            type="circle"
            onClick={() => dispatch(decreaseQuantity(pizzaId))}
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            type="circle"
            onClick={() => dispatch(increaseQuantity(pizzaId))}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
