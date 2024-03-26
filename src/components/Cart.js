import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //subscribing to portion of the store
  /* const store = useSelector((store) => store);
  const cartItems = useSelector((store) => store.cart.items); //very less efficient
  //subscribing to the entire store.
  //which means you are sunscribing to any random change in that store
  //we should avoid doing that */
  //Never do this. we are just subscribing to  selected portion of the store (Hence the name selector)

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={() => handleClearCart()}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <p>Cart is empty. Add items to Cart</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
