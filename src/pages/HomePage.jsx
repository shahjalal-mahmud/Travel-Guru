import React from 'react';
import NavBar from '../components/NavBar';
import bgImg from '../assets/Rectangle 1.png';
import Booking from '../layouts/Booking';
import CardSlider from '../layouts/CardSlider';

const HomePage = () => {
    return (
        <div className="font-Montserrat h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <header>
                <NavBar></NavBar>
            </header>
            <main className='flex justify-between items-center pl-10'>
                <Booking></Booking>
                <CardSlider></CardSlider>
            </main>

        </div>
    );
};

export default HomePage;