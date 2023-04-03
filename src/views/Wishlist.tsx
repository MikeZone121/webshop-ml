import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { wishlistItem } from "../components/types";
import { ProductModel } from "../components/types";
import { useEffect } from "react";
import {
  clearWishlist,
  RemoveFromWishlist,
  getTotals,
} from "../redux/WishlistSlice";

function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [wishlist]);

  const handleRemoveFromWishlist = (wishlistItem: ProductModel) => {
    dispatch(RemoveFromWishlist(wishlistItem));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div className="cart-container">
      <h2>Wishlist</h2>
      {wishlist.wishlistTotalQuantity === 0 ? (
        <div className="cart-empty text-center">
          <p>
            Your wishlist is empty. <br />
            <span>Go to the store and add some lovely products!</span>
          </p>
          <div className="start-shopping text-center">
            <Link to="/">
              <span>Start wishlisting</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {wishlist.wishlistItems?.map((wishlistItem: wishlistItem) => (
              <div className="cart-item" key={wishlistItem.id}>
                <div className="cart-product">
                  <img src={wishlistItem.thumbnail} alt={wishlistItem.title} />
                  <div>
                    <h3>{wishlistItem.title}</h3>
                    <p>{wishlistItem.description}</p>
                    <button
                      onClick={() => handleRemoveFromWishlist(wishlistItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">
                  <h3>{wishlistItem.price}</h3>
                </div>
                <div className="cart-product-total-price">
                  <h3>{wishlistItem.price * wishlistItem.wishlistQuantity}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-cart"
              onClick={() => handleClearWishlist()}
            >
              Clear Cart
            </button>
          </div>
          {/* TODO --> ADD TO CART BUTTON AND THEN DELETE ITEM IN WISHLIST */}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
