import React, { use, useState } from 'react';
import ProductCard from './ProductCard';
import SelectedCarts from './SelectedCarts';

const DataSection = ({productPromise}) => {
    console.log(productPromise);

    const products = use(productPromise)
    console.log(products);

    const [selectedType, setSelectedType] = useState("Products");
    const [selectedCarts, setSelectedcarts] = useState([])

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold  mt-30 mb-4'>Premium Digital Tools</h1>
                <p className='text-[#627382FF] leading-relaxed mb-4'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
            </div>

            <div className='text-center mb-8'>
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



            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                { selectedType === "Products" ? (
                    products.map(product => (<ProductCard key={product.id} product={product}></ProductCard>))

                ) : (
                    <SelectedCarts selectedCarts={selectedCarts}></SelectedCarts>
                )
                    
                }

            </div>
            
        </div>
    );
};

export default DataSection;