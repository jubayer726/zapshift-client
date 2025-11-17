import React from 'react';
import locationmerchant from '../../../assets/location-merchant.png';

const Merchant = () => {
    return (
        <div className='bg-[#03373d] text-white flex gap-4 justify-between items-center rounded-2xl py-5'>
            <div className='p-5'>
                <h1 className='text-3xl font-bold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className='text-sm py-5'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
            <button className='btn btn-primary m-5'>Become a Merchant</button>
            <button className='btn'>Earn with ZapShift Courier</button>
            </div>
            <img src={locationmerchant} alt="" />
            
        </div>
    );
};

export default Merchant;