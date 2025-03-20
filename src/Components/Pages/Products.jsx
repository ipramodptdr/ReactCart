import React, { useEffect, useState } from "react";
import { getData } from "../../ProductsApi";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setProducts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
