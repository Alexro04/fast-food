import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 font-normal sm:gap-3">
      <Button type="circle" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span>{quantity}</span>
      <Button type="circle" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
