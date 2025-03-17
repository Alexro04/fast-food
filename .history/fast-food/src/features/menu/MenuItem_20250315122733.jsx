import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleClick(e) {
    // e.preventDefault();
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * quantity,
    };

    console.log(newItem);
  }

  return (
    <li className="flex gap-4 p-2 text-start text-stone-800 md:py-3">
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
          <Button type="small" onClick={handleClick}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
