import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductModel } from "./types";
import { addToCart } from "../redux/CartSlice";
import { addToWishlist } from "../redux/WishlistSlice";
import { useNavigate } from "react-router-dom";
import { WishListIcon } from "../assets/img/icons";
import { useGetAllProductsQuery } from "../services/products";

function Main() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { data } = useGetAllProductsQuery();

  const renderList =
    data &&
    data.products.map((product: ProductModel) => {
      const { id, title, brand, thumbnail, price } = product;
      const handleAddToCart = (product: ProductModel) => {
        dispatch(addToCart(product));
        navigateTo("/cart");
      };

      const handleAddToWishlist = (product: ProductModel) => {
        dispatch(addToWishlist(product));
        navigateTo("/wishlist");
      };

      return (
        <div
          key={id}
          className="m-6 p-6 md:pb-0 flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]	rounded-md"
        >
          <Link to={`/product/${id}`} key={id}>
            <div className="flex flex-col">
              <img
                src={thumbnail}
                alt={title}
                className="w-[100%] h-[200px] object-cover rounded-md"
              />
              <small className="mt-4">{brand}</small>
              <h2 className="text-xl mt-0">{title}</h2>
              <h4 className="mb-6 text-xl mt-4">€ {price}</h4>
            </div>
          </Link>
          <div className="flex align-middle mb-6 justify-between">
            <button
              onClick={() => handleAddToCart(product)}
              className="rounded-md border-2 border-blue text-blue hover:text-white hover:bg-blue transition ease-in-out px-6 py-2"
            >
              Add to cart
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              aria-label="view favourites"
              className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <WishListIcon width={24} height={24} />
            </button>
          </div>
        </div>
      );
    });

  return (
    <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-flow-row-2 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
      {renderList}
    </div>
  );
}

export default Main;
