import React from 'react';
import { TiTick } from "react-icons/ti";

const Features = ({feature}) => {
    console.log(feature);
    return (
        <div className='flex items-center gap-2 '>
            <span><TiTick /></span>
            <h3 className='text-gray-500 text-sm'>{feature}</h3>
        </div>
    );
};

export default Features;