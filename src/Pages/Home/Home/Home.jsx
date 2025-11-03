import React from 'react';
import Banner from '../Banner/Banner';
import HowToWorks from '../HowToWorks/HowToWorks';
import OurService from '../OurService/OurService';
import ServiceSection from '../ServiceSection/ServiceSection';
import Clients from '../Clients/Clients';
import FAQ from '../FAQ/FAQ';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWorks></HowToWorks>
            <OurService></OurService>
            <Clients></Clients>
            <ServiceSection></ServiceSection>
            <FAQ></FAQ>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;