import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductModel } from "./types";
import { addToCart } from "../redux/CartSlice";
import { useGetProductQuery } from "../services/products";

function ProductDetail() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { productId } = useParams();

  const { data, isLoading } = useGetProductQuery(productId);

  const handleAddToCart = (product: ProductModel) => {
    dispatch(addToCart(product));
    navigateTo("/cart");
  };

  return (
    <>
      {!isLoading && data ? (
        <div key={data.id} className="card">
          <div className="flex flex-col items-center px-6">
            <div className="text-left">
              <img
                src={data.images?.[0]}
                alt={data.title}
                className="w-[300px] h-[300px] object-cover rounded-md"
              />
              <h2 className="text-xl my-6">{data.title}</h2>
              <h3 className="mb-6">€ {data.price}</h3>
              <p className="mb-6">{data.description}</p>
              <button
                onClick={() => handleAddToCart(data)}
                className="border-2 border-blue text-blue hover:text-lightblue hover:border-lightblue transition ease-in-out px-6 py-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
