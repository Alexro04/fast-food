import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex grow items-center justify-between px-2 py-3 sm:px-3 sm:py-4 sm:text-lg">
      <p>
        <span className="font-semibold">{quantity}&times;</span> {name}
      </p>
      <div className="flex gap-4 font-semibold">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="space-x-2">
          <Button type="circle">-</Button>
          <span>2</span>
          <Button>+</Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
