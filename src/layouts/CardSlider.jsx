import React, { useState } from 'react';
import card1 from '../assets/Rectangle 1.png';
import card2 from '../assets/Sajek.png';
import card3 from '../assets/Sreemongol.png';
import card4 from '../assets/sundorbon.png';
import card5 from '../assets/Rectangle 28.png';

const CardSlider = () => {
    const [index, setIndex] = useState(0); // State to track the current index of visible cards

    const cards = [
        { id: 1, title: "Cox’s  Bazar", img: card1 },
        { id: 2, title: "Sajek", img: card2 },
        { id: 3, title: "Sreemongol", img: card3 },
        { id: 4, title: "Sundorbon", img: card4 },
        { id: 5, title: "Beach", img: card5 },
    ];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    return (
        <div className="relative">
            <div className="flex overflow-hidden">
                {/* Container for sliding cards */}
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${index * 220}px)`, // 220px is the card width + margin/padding
                    }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="relative w-72 h-[416px] mx-2 border rounded-md shadow-lg overflow-hidden"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 bg-transparent text-white w-full p-2 text-start font-Bebas text-3xl">
                                {card.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Left Button */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#8249;
            </button>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
                &#8250;
            </button>
        </div>
    );
};

export default CardSlider;
