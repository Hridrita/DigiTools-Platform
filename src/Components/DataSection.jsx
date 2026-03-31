import React, { use } from 'react';
import ProductCard from './ProductCard';

const DataSection = ({productPromise}) => {
    console.log(productPromise);

    const products = use(productPromise)
    console.log(products);

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold  mt-30 mb-4'>Premium Digital Tools</h1>
                <p className='text-[#627382FF] leading-relaxed mb-4'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
            </div>

            <div className='text-center mb-8'>
                <button className="btn bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-3xl">Products</button>
            <button className='btn rounded-3xl'>Cart(2)</button>

            </div>


            <div className=' grid grid-cols-3 gap-3'>
                {
                   products.map(product => (<ProductCard product={product}></ProductCard>)) 
                }

            </div>
            
        </div>
    );
};

export default DataSection;