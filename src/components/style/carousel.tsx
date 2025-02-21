"use client"
import { useState } from "react";

const images = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev+1) % images.length);
    }

    const prevSlide = () => {
        setCurrent((prev) => (prev-1 + images.length) % images.length);
    }

    return(
        <div className={"relative w-full max-w-3xl mx-auto overflow-hidden"}>
        {/* Slides */}
            <div className={"flex transition-transform duration-500 ease-in-out"} style={{transform: `translateX(-${current * 100}%)`}}>
                {images.map((img , index) => (
                    <img key={index} src={img} alt={`Slide ${index + 1}`} className={"w-full flex-shrink-0"}/>
                ))}
            </div>

        {/* Navigation Buttons */}
            <button onClick={prevSlide} className={"absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"}>
                ◀
            </button>
            <button onClick={nextSlide} className={"absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"}>
                ▶
            </button>
        </div>
    )
}

export default Carousel;