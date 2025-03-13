import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../utils/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="px-4 py-6">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  try {
    const menu = await getMenu();
    return menu;
  } catch (error) {
    console.log(error);
  }
}

export default Menu;
