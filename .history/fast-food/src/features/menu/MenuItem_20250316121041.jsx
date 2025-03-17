import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCartItem } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cartItem = useSelector(getCartItem(id));

  function handleClick() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li
      className="flex gap-4 p-2 text-start text-stone-800 md:py-3"
      onClick={() => console.log(cartItem)}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`w-24 ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex grow flex-col md:text-xl">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between uppercase">
          {!soldOut ? (
            <p className="font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm">Sold out</p>
          )}

          {cartItem.quantity > 0 ? (
            <div className="flex gap-2">
              <UpdateItemQuantity pizzaId={id} quantity={cartItem?.quantity} />
              <DeleteButton pizzaId={id} />
            </div>
          ) : (
            <Button type="small" onClick={handleClick}>
              Add to cart
            </Button>
          )}

          {!soldOut && <></>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
