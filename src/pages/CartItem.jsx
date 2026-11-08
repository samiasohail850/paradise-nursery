import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty!</h2>
            <Link to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=200&q=80`}
                  alt={item.name}
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>
                    Total: ${item.price * item.quantity}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Grand Total: ${totalAmount}</h2>

            <button
              className="checkout-btn"
              onClick={() => alert("Checkout Coming Soon!")}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-btn">
              Continue Shopping
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default CartItem;