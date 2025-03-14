// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../utils/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-3 text-stone-800">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Status</h2>

        <div className="space-x-2">
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-between bg-stone-200 px-4 py-4">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
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
