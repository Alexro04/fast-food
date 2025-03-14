// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../utils/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    cart,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-3 text-sm text-stone-800">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Status</h2>

        <div className="space-x-2">
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-stone-200 px-4 py-4">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="italic text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-x">
        {cart.map((item) => (
          <OrderItem item={item} />
        ))}
      </ul>

      <div className="bg-stone-200 px-4 py-4">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;

export async function loader({ params }) {
  const id = params.orderId;
  try {
    const order = await getOrder(id);
    return order;
  } catch (error) {
    console.log(error);
  }
}
