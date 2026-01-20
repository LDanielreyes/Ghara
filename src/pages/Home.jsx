import React from 'react';
import Hero from '../components/sections/Hero';
import BestSellers from '../components/sections/BestSellers';
import MaintenanceBanner from '../components/sections/MaintenanceBanner';
import BrandLogos from '../components/sections/BrandLogos';
import OurApproaches from '../components/sections/OurApproaches';
import DistributionCenter from '../components/sections/DistributionCenter';
import LocationMap from '../components/sections/LocationMap';
import ScrollReveal from '../components/ui/ScrollReveal';

const Home = () => {
    return (
        <>
            <Hero />

            <ScrollReveal>
                <BestSellers />
            </ScrollReveal>

            <ScrollReveal>
                <MaintenanceBanner />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <BrandLogos />
            </ScrollReveal>

            <ScrollReveal>
                <OurApproaches />
            </ScrollReveal>

            <ScrollReveal>
                <DistributionCenter />
            </ScrollReveal>

            <ScrollReveal>
                <LocationMap />
            </ScrollReveal>
        </>
    );
};

export default Home;
