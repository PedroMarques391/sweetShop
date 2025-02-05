import React from 'react'


import Image from 'next/image';
import { gallery } from '../utils/data';



const Gallery = (): React.JSX.Element => {
    return (
        <section className='bg-[#FADADD] py-16 text-white'>
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h1 className="text-4xl font-semibold mb-8 text-center text-[#535046]">
                        Galeria
                    </h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
                        {gallery.map((item, index) => (
                            <div
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                key={index}
                                className="flex justify-center items-center bg-white rounded-lg flex-1 p-2 "
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.logo}
                                        alt="Imagem da galeria"
                                        priority
                                        quality={100}
                                        className="object-cover rounded-lg"
                                    />

                                    <div className="absolute top-0 left-0 h-full w-full bg-black/65 rounded-lg flex justify-center items-center duration-700 transition-opacity cursor-pointer opacity-0 hover:opacity-100 z-10">
                                        <h1 className='text-2xl text-[#FADADD] font-bold'>{item.text}</h1>
                                    </div>
                                </div>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery