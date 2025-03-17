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
  console.log(order);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-4 text-sm text-stone-800 sm:text-base">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
          Status: {id}
        </h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-800 sm:text-sm">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800 sm:text-sm">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between bg-stone-200 px-4 py-4 sm:px-5 sm:py-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="italic text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="my-3 divide-y divide-stone-200">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
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

// FWWLMOs
