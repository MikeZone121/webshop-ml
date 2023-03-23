import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

function ProductDetail() {
  const product = useSelector((state: RootState) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/${productId}`
      );
      dispatch(selectProducts(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    productId && fetchProductDetail();
  }, [productId]);

  return (
    <div key={product.id} className="card">
      <div className="flex flex-col items-center px-6">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-[50%]"
        />
        <h2 className="text-xl my-6 text-center">{product.title}</h2>
        <h3 className="mb-6">€ {product.price}</h3>
        <button className="border-2 border-blue text-blue hover:text-lightblue hover:border-lightblue transition ease-in-out px-6 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
