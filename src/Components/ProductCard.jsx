import React from "react";
import Features from "./Features";


const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="relative card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <img className='p-2 border border-gray-100 rounded-full bg-white shadow-sm object-contain' src={product.icon} width={45}
     height={45}></img>
    <span className="absolute top-4 right-4 badge badge-xs badge-warning">{product.tagType}</span>
    <div className="flex justify-between">
      <h2 className="text-xl font-bold">{product.name}</h2>
      
      
    </div>

    <p className="text-[#627382FF]">{product.description}</p>
    <div className="flex items-baseline">
        <h1 className="text-2xl font-bold">${product.price}</h1> 
        <h3 className="text-gray-500 text-sm">/{product.period}</h3>

    </div>


    <div>
        {
            product.features.map((feature,index) => (<Features key={index} feature={feature}></Features>))
        }
    </div>
    
    <div className="mt-6">
      <button className="btn w-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductCard;
