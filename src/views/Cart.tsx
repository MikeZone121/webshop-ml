import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { cartItem } from "../components/types";

function Cart() {
  const Cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {Cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>
            Your cart is empty. <br />
            <span>Go to the store and buy some products!</span>
          </p>
          <div className="start-shopping">
            <Link to="/">
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {Cart.cartItems?.map((cartItem: cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.thumbnail} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                  <h3>{cartItem.price}</h3>
                </div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price">
                  <h3>{cartItem.price * cartItem.cartQuantity}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span className="amount">{Cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at chekout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
