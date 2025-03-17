import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 font-normal">
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
