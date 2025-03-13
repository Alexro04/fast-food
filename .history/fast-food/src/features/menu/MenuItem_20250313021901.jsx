import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 text-start text-stone-600">
      <img src={imageUrl} alt={name} className="w-24" />
      <div className="flex">
        <p className="font-semibold">{name}</p>
        <p className="capitalize italic">{ingredients.join(", ")}</p>
        <div className="mt-auto">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
