import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setData(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4">
      {loading && <div>Loading... </div>}

      {data.map((product) => (
        <div key={product.id} className="card">
          <div className="flex flex-col items-center px-6">
            <img src={product.image} alt={product.title} className="w-[50%]" />
            <h2 className="text-xl my-6 text-center">{product.title}</h2>
            <h3 className="mb-6">€ {product.price}</h3>
            <button className="border-2 border-blue text-blue hover:text-lightblue hover:border-lightblue transition ease-in-out px-6 py-2">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
