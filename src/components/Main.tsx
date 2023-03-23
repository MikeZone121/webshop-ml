import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductModel } from "./types";
import { RootState } from "../redux/store";

function Main() {
  const dispatch = useDispatch();
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
    const { id, title, thumbnail, price } = product;
    return (
      <Link to={`/product/${id}`} key={id}>
        <div className="card">
          <div className="flex flex-col items-center px-6">
            <img src={thumbnail} alt={title} className="w-[50%]" />
            <h2 className="text-xl my-6 text-center">{title}</h2>
            <h3 className="mb-6">€ {price}</h3>
            <button className="border-2 border-blue text-blue hover:text-lightblue hover:border-lightblue transition ease-in-out px-6 py-2">
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="grid grid-cols-4 grid-rows-4">{renderList}</div>;
}

export default Main;
