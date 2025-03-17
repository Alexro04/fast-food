import { useDispatch } from "react-redux";
import Button from "./Button";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="space-x-2 font-normal">
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
