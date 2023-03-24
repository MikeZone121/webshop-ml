import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductModel } from "./types";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      dispatch(setProducts(response.data));
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const products = useSelector((state: RootState) => state.allProducts);
  const renderList = products.map((product: ProductModel) => {
    const { id, title, brand, thumbnail, price } = product;
    const handleAddToCart = (product: ProductModel) => {
      dispatch(addToCart(product));
      navigateTo("/cart");
    };
    return (
      <div className="mx-6 my-6 px-6 flex flex-col	">
        <Link to={`/product/${id}`} key={id}>
          <div className="flex flex-col">
            <img src={thumbnail} alt={title} className="w-[100%]" />
            <small className="mt-4">{brand}</small>
            <h2 className="text-xl mt-0">{title}</h2>
            <h4 className="mb-6 text-xl mt-4">€ {price}</h4>
          </div>
        </Link>
        <div className="flex">
          <button
            onClick={() => handleAddToCart(product)}
            className="border-2 border-blue text-blue hover:text-white hover:bg-blue transition ease-in-out px-6 py-2 mb-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return <div className="grid grid-cols-4 grid-rows-4">{renderList}</div>;
}

export default Main;
