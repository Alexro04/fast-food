import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../utils/apiRestaurant";
import Button from "../../ui/Button";
import EmptyCart from "../../features/cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const errors = useActionData();

  const isLoading = navigation.state === "submitting";
  const cart = useSelector(getCart);
  const { username, status, address, position, error } = useSelector(
    (state) => state.user,
  );

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-3 sm:px-6 sm:py-4">
      <h2 className="mb-4 text-xl font-semibold sm:mb-8 sm:text-3xl">
        Ready to order? Let's go!
      </h2>

      <Form method="post" className="flex flex-col gap-4 text-stone-800">
        <div className="flex grow flex-col gap-2 md:flex-row md:items-center md:gap-8">
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
          <label>Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
          </div>
        </div>
        {errors?.phone && (
          <p className="mt-2 rounded-md bg-red-100 px-4 py-2 text-xs text-red-700 md:text-sm">
            {errors.phone}
          </p>
        )}

        <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
          <label>Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              defaultValue={address}
            />
          </div>
          {!address && (
            <span className="absolute right-2 top-10">
              <Button
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Fetching Address");
                  dispatch(fetchAddress());
                }}
              >
                Use geolocation
              </Button>
            </span>
          )}
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

  console.log(data);
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.phone =
      "Please provide a valid phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // // If there are no errors, create order and redirect user
  // const createdOrder = await createOrder(newOrder);
  // return redirect(`/order/${createdOrder.id}`);
}
