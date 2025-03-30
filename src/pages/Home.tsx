// src/pages/Home.tsx
import Hero from '../components/layout/Hero';
import Specialties from '../components/layout/Specialties';
import CallToAction from '../components/layout/CallToAction';
import NewsSection from '../components/layout/NewsSection';

const Home = () => {
    return (
        <>
            <Hero />
            <Specialties />
            <CallToAction />
            <NewsSection />
        </>
    );
};

export default Home;