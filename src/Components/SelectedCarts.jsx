import React from 'react';

const SelectedCarts = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-75 w-full text-center">
           
            <h2 className='font-bold text-2xl text-gray-800 mb-2'>
                No Carts Selected Yet
            </h2>
            
            
            <p className='text-gray-500 text-lg'>
                Go to the products tab to select your tools.
            </p>
        </div>
    );
};

export default SelectedCarts;