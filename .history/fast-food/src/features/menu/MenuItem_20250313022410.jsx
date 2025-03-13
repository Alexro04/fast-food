import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 divide-y divide-stone-200 p-2 text-start text-stone-600">
      <img src={imageUrl} alt={name} className="w-24" />
      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto uppercase">
          {!soldOut ? (
            <p className="font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm">Sold out</p>
          )}
          <button>Add to cart</button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
