import React from 'react';
import { FaTruckPickup } from 'react-icons/fa';
import pikup from '../../../assets/pikup.png'

const HowToWork = () => {

    const carts = [
        {
            id: 1,
            title: "Booking Pick & Drop",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 2,
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 3,
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
        {
            id: 4,
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time."
        },
    ]
    return (
        <div className='py-20'>
            <h1 className='text-3xl font-bold text-secondary my-5'>How it Works</h1>
            <div className='grid grid-cols-4 gap-6'>
                {
                    carts.map(cart=><div className='shadow-sm p-5 bg-white rounded-2xl text-secondary' key={cart.id}>
                        <img src={pikup} alt="" />
                        <h1 className='text-xl font-semibold py-2'>{cart.title}</h1>
                        <p>{cart.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HowToWork;