import React, { useState } from "react";
import Features from "./Features";
import { toast } from 'react-toastify';



const ProductCard = ({ product,selectedCarts, setSelectedCarts }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleProductSelect = () =>{
        toast.success("Cart Selected");
        setIsSelected(true);

        setSelectedCarts([...selectedCarts, product])
    }




  console.log(product);
  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative card w-full h-full bg-base-100 shadow-sm border border-gray-100 flex flex-col">
  <div className="card-body flex flex-col flex-grow">

    <img className='p-2 border border-gray-100 rounded-full bg-white shadow-sm object-contain' src={product.icon} width={45}
     height={45}></img>

    <span className="absolute top-4 right-4 w-20 rounded-full bg-orange-200 text-center text-[#bb4d00FF]">{product.tagType}</span>


    <div className="flex justify-between">
      <h2 className="text-xl font-bold">{product.name}</h2>
      
      </div>

    <p className="text-[#627382FF] text-sm mb-2">{product.description}</p>

    <div className="flex items-baseline">
        <h1 className="text-2xl font-bold">${product.price}</h1> 
        <h3 className="text-gray-500 text-sm">/{product.period}</h3>
    </div>


    <div className="flex-grow">
        {
            product.features.map((feature,index) => (<Features key={index} feature={feature} ></Features>))
        }
    </div>
    
    <div className="mt-6">
      <button onClick={handleProductSelect} className={
        `btn w-full text-white font-bold rounded-3xl 
        ${
            isSelected ? "bg-green-600 hover:bg-green-700" :
            "bg-linear-to-r from-blue-600 to-purple-600"

        }`
      }>
        {
            isSelected === true ? "Added on the Carts" : "Buy Now"
        }
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductCard;
