
import React from 'react';
import { toast } from 'react-toastify';

const SelectedCarts = ({ selectedCarts, setSelectedCarts }) => {
    
    
    const totalPrice = selectedCarts.reduce((total, item) => total + item.price, 0);

    
    const handleRemove = (id) => {
        
        const remainingCarts = selectedCarts.filter(item => item.id !== id);
        toast.error("Selected cart has deleted");
        setSelectedCarts(remainingCarts);
        
    };

    const handleProceedButton = () =>{
        toast.success("Checkout Successful! Your order is placed.");
        setSelectedCarts([]);
    }

    return (
        <div className=" p-6 md:p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm max-w-4xl mx-auto my-10">
            <div className="flex justify-between items-center mb-10">
        <h1 className='font-bold text-3xl text-gray-800'>Your Cart</h1>

    </div>

            <div className='space-y-4'>
                {
                    selectedCarts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center">
                            <h2 className='font-bold text-xl text-gray-400'>
                                No Carts Selected Yet
                            </h2>
                        </div>
                    ) : (
                        <>
                            {selectedCarts.map((carts) => (
                                <div key={carts.id} className='flex items-center justify-between p-5 bg-[#F9FAFB] rounded-2xl'> 
                                    <div className='flex items-center gap-4'>
                                        <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-50">
                                            <img src={carts.icon} alt={carts.name} className='h-8 w-8 object-contain' />
                                        </div>
                                        <div>
                                            <h2 className='font-bold text-lg text-gray-800'>{carts.name}</h2>
                                            <p className='text-gray-400'>${carts.price}</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <button 
                                        onClick={() => handleRemove(carts.id)}
                                        className="text-red-500 font-medium hover:text-red-700 transition-all text-sm"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}

                            
                            <div className="mt-10 pt-6 border-t border-gray-50">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-500 font-medium text-lg">Total:</span>
                                    <span className="text-2xl font-black text-gray-900">${totalPrice}</span>
                                </div>

                                <button onClick={handleProceedButton} className="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white font-bold py-4 rounded-full transition-all text-lg shadow-lg shadow-purple-100">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default SelectedCarts;