import React from 'react';
import Banner from '../Banner/Banner';
import HowToWork from '../HowToWork/HowToWork';
import OurServices from '../OurServices/OurServices';
import Brand from '../Brand/Brand';
import Delivary from '../HowToWork/Delivary';
import Merchant from './../HowToWork/Merchant';
import Reviews from '../../Shared/Reviews/Reviews';


const ReviewsPromise = fetch('/reviews.json')
.then(res=>res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWork></HowToWork>
            <OurServices></OurServices>
            <Brand></Brand>
            <Delivary></Delivary>
            <Merchant></Merchant>
            <Reviews ReviewsPromise={ReviewsPromise}></Reviews>
        </div>
    );
};

export default Home;