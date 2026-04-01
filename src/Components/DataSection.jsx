import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import SelectedCarts from "./SelectedCarts";

const DataSection = ({ productPromise }) => {
  console.log(productPromise);

  const products = use(productPromise);
  console.log(products);

  const [selectedType, setSelectedType] = useState("Products");
  const [selectedCarts, setSelectedCarts] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-4">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382FF] leading-relaxed mb-8 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designed<br></br> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <button
          onClick={() => setSelectedType("Products")}
          className={`btn rounded-3xl font-bold transition-all ${
            selectedType === "Products"
              ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setSelectedType("Cart")}
          className={`btn rounded-3xl font-bold transition-all ${
            selectedType === "Cart"
              ? "bg-linear-to-r from-blue-600 to-purple-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Cart({selectedCarts.length})
        </button>
      </div>


      <div className={`w-full gap-8 
      ${selectedType === "Products"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
            : "block max-w-3xl mx-auto"
        }`}
      >
        {selectedType === "Products" ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />
          ))
        ) : (
          <SelectedCarts selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} />
        )}
      </div>
    </div>
  );
};

export default DataSection;
