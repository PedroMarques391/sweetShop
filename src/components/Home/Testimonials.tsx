"use client"
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { CiClock1 } from "react-icons/ci";
import { FaStar, } from "react-icons/fa";
import { BiUserVoice } from "react-icons/bi";
import { testimonials } from "../utils/data";


;

const Testimonials = (): React.JSX.Element => {
    const [embraRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev(): void {
        emblaApi?.scrollPrev()
    }

    function scrollNext(): void {
        emblaApi?.scrollNext()
    }

    return (
        <section className='bg-[#FAF3E0] py-16'>
            <div className="container mx-auto px-4">
                <h1 className='text-4xl mb-12 text-center text-[#D47FA6] font-bold'>Alguns dos nossos clientes</h1>
                <div className='relative max-w-4xl mx-auto'>
                    <div className="overflow-hidden" ref={embraRef}>
                        <div className="flex">
                            {testimonials.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-pink-50 text-gray-800 rounded-2xl p-6 shadow-lg flex flex-col gap-y-4 select-none transition-transform hover:scale-105 duration-300">
                                        <div className="flex-1 flex flex-col items-center justify-between">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-16 h-16 bg-pink-200 text-pink-600 rounded-full flex items-center justify-center shadow-md">
                                                    <BiUserVoice className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h1 className="font-bold text-lg text-pink-600">{item.name}</h1>
                                                    <p className="text-gray-500 italic mt-1">{item.feedback}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="border-t-2 border-pink-100 flex justify-around items-center pt-4">
                                            <div className="flex items-center gap-2 text-sm">
                                                <CiClock1 className="w-4 h-4 text-pink-500" />
                                                <span className="text-gray-500">{item.date}</span>
                                            </div>

                                            <div className="flex mt-4 gap-1">
                                                {Array.from({ length: 5 }, (_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`w-5 h-5 ${i < item.stars ? "text-yellow-400" : "text-gray-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                    </article>
                                </div>

                            ))}
                        </div>
                    </div>
                    <button
                        aria-label="Scroll to previous items"
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10"
                    >
                        <IoIosArrowBack className="w-6 h-6" />
                    </button>
                    <button
                        aria-label="Scroll to next items"
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors z-10"
                    >
                        <IoIosArrowForward className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials