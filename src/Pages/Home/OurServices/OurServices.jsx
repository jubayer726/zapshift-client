import React from 'react';
import service from '../../../assets/service.png'

const OurServices = () => {
    const carts = [
            {
                id: 1,
                title: "Express  & Standard Delivery",
                description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off."
            },
            {
                id: 2,
                title: "Nationwide Delivery",
                description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours."
            },
            {
                id: 3,
                title: "Fulfillment Solution",
                description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
            },
            {
                id: 4,
                title: "Cash on Home Delivery",
                description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
            },
              {
                id: 5,
                title: "Corporate Service / Contract In Logistics",
                description: "Customized corporate services which includes warehouse and inventory management support."
            },
              {
                id: 6,
                title: "Parcel Return",
                description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
            },
        ]
        return (
            <div className='py-20 bg-[#03373d] text-white px-10 rounded-2xl'>
                <div className='py-10'>
                    <h1 className='text-3xl font-bold my-5 text-center'>Our Services</h1>
                <p className='text-center'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages <br /> to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        carts.map(cart=>
                        <div className='shadow-sm rounded-2xl bg-white text-secondary p-5' key={cart.id}>
                            <img src={service} alt="" className='mx-auto' />
                            <h1 className='text-xl font-semibold py-2'>{cart.title}</h1>
                            <p>{cart.description}</p>
                        </div>)
                    }
                </div>
            </div>
        );
};

export default OurServices;