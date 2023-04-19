import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { wishlistItem } from "../components/types";
import { ProductModel } from "../components/types";
import { useEffect } from "react";
import {
  clearWishlist,
  removeFromWishlist,
  getTotals,
  removeFromWishlistAfterAddToCart,
} from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";

function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [wishlist]);

  const handleAddToCarFromWishlist = (wishlistItem: ProductModel) => {
    dispatch(addToCart(wishlistItem));
    dispatch(removeFromWishlistAfterAddToCart(wishlistItem));
  };

  const handleremoveFromWishlist = (wishlistItem: ProductModel) => {
    dispatch(removeFromWishlist(wishlistItem));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div className="wishlist-container container">
      <h2>Wishlist</h2>
      {wishlist.wishlistTotalQuantity === 0 ? (
        <div className="wishlist-empty text-center">
          <p>
            Your wishlist is empty. <br />
            <span>Go to the store and add some lovely products!</span>
          </p>
          <div className="start-shopping text-center">
            <Link to="/">
              <button className="rounded-md border-2 border-blue text-blue hover:text-white hover:bg-blue transition ease-in-out px-6 py-2 my-6">
                Start wishlisting
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price text-right">Price</h3>
          </div>
          <div className="wishlist-items">
            {wishlist.wishlistItems?.map((wishlistItem: wishlistItem) => (
              <div className="wishlist-item" key={wishlistItem.id}>
                <div className="wishlist-product">
                  <img src={wishlistItem.thumbnail} alt={wishlistItem.title} />
                  <div>
                    <h3>{wishlistItem.title}</h3>
                    <p>{wishlistItem.description}</p>
                    <button
                      onClick={() => handleremoveFromWishlist(wishlistItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="wishlist-product-price text-right">
                  <h3>{wishlistItem.price}</h3>
                </div>
                <div className="wishlist-product-price text-right">
                  <button
                    onClick={() => handleAddToCarFromWishlist(wishlistItem)}
                    className="rounded-md border-2 border-blue text-blue hover:text-white hover:bg-blue transition ease-in-out px-6 py-2 my-6"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-cart"
              onClick={() => handleClearWishlist()}
            >
              Clear Wishlist
            </button>
          </div>
          {/* TODO --> ADD TO CART BUTTON AND THEN DELETE ITEM IN WISHLIST */}
          {/* TO DO --> IF ITEM IS ADDED TO WISHLIST SVG NEEDS TO BE RED */}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
