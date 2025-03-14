import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../utils/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const errors = useActionData();

  const isLoading = navigation.state === "submitting";
  const cart = fakeCart;

  return (
    <div className="px-4 py-3 sm:px-6 sm:py-4">
      <h2 className="mb-4 text-xl font-semibold sm:mb-8 sm:text-3xl">
        Ready to order? Let's go!
      </h2>

      <Form method="post" className="flex flex-col gap-4 text-stone-800">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <label>First Name</label>
          <input type="text" name="customer" required className="input grow" />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <label>Phone number</label>
          <div className="grow">
            {errors?.phone && <p>{errors.phone}</p>}
            <input type="tel" name="phone" required className="input w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <label>Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 accent-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want us to give this order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <Button disabled={isLoading} type="primary">
            {isLoading ? "Creating order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const newOrder = {
    ...data,
    priority: data?.priority === "on",
    cart: JSON.parse(data.cart),
  };

  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone =
      "Please provide a valid phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If there are no errors, create order and redirect user
  const createdOrder = await createOrder(newOrder);
  return redirect(`/order/${createdOrder.id}`);
}
