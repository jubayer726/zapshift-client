import React from 'react';
import livetracking from '../../../assets/live-tracking.png'
import safedelivery from '../../../assets/safe-delivery.png'

const Delivary = () => {
    return (
        <div className='py-10'>
            <div className="border-t border-dashed border-gray-400 h-px"></div>
            <div className='py-10'>
                <div className='flex gap-8 bg-white p-5 my-5 text-secondary items-center'>
                    <img src={livetracking} alt="" />
                    <div className="w-px border-l border-dotted border-gray-400 h-40"></div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Live Parcel Tracking</h1>
                        <p className='text-sm pt-2'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                    
                </div>

                <div className='flex gap-8 bg-white p-5 my-5 text-secondary items-center'>
                    <img src={safedelivery} alt="" />
                    <div className="w-px border-l border-dotted border-gray-400 h-40"></div>
                    <div>
                        <h1 className='text-2xl font-semibold'>100% Safe Delivery</h1>
                        <p className='text-sm pt-2'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                    
                </div>

                <div className='flex gap-8 bg-white p-5 my-5 text-secondary items-center'>
                    <img src={safedelivery} alt="" />
                    <div className="w-px border-l border-dotted border-gray-400 h-40"></div>
                    <div>
                        <h1 className='text-2xl font-semibold'>24/7 Call Center Support</h1>
                        <p className='text-sm pt-2'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                    
                </div>
            </div>
            <div className="border-t border-dashed border-gray-400 h-px"></div>
        </div>
    );
};

export default Delivary;