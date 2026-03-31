import React from "react";

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
    <span className="text-xl">${product.price}</span>
    
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductCard;
