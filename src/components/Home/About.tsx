"use client"
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import AboutImage1 from "../../../public/img/about.webp";
import AboutImage2 from "../../../public/img/about2.jpg";
import AboutImage3 from "../../../public/img/about3.webp";
import AboutImage4 from "../../../public/img/about4.webp";
import { BiCheck } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CTAButton from '../ui/CTAButton';

const About = (): React.JSX.Element => {
    const images: StaticImageData[] = [AboutImage1, AboutImage2, AboutImage3, AboutImage4]
    const [image, setImage] = useState<StaticImageData>(images[0])

    const aboutItems: string[] = [
        " Aberto desde 2006, trazendo doçura para sua vida",
        " Localização privilegiada no coração da cidade",
        " Atendimento excepcional e personalizado",
        " Conforto e elegância em cada detalhe",
        "Ambiente acolhedor e sofisticado para momentos especiais",
    ]

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setImage(images[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);



    return (
        <section
            className="bg-[#FAF3E0] py-16"
            data-aos="fade-up"
        >
            <div
                className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4"
            >
                <div className="relative" data-aos="fade-right">
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt="About Image"
                            fill
                            priority
                            quality={80}
                            className="object-cover hover:scale-110 duration-700 transition-all"
                        />
                    </div>

                    <div className="absolute -bottom-10 w-full flex justify-center gap-4 px-6 sm:px-8">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setImage(img)}
                                className={`flex flex-1 rounded-lg border-4 cursor-pointer transition-all duration-500 ${img === image ? "border-[#70cbdd]" : "border-white"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Imagem ${index + 1}`}
                                    priority
                                    width={500}
                                    height={500}
                                    quality={100}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <div
                    className="space-y-6"
                    data-aos="fade-left"
                >
                    <h1 className="text-5xl font-bold text-[#D47FA6]">Sobre</h1>
                    <p>
                        Nosso ateliê de doces oferece uma experiência única e inesquecível, combinando sabores deliciosos, beleza e um atendimento excepcional. Localizado em uma área privilegiada, transformamos seus momentos especiais em memórias doces e encantadoras.
                    </p>

                    <ul className="space-y-4">
                        {aboutItems.map((item, index) => (
                            <li
                                key={index} className="flex justify-left items-center">
                                <BiCheck color="#D47FA6" className="w-8 h-8" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <section
                        className="flex items-center justify-center md:justify-normal gap-x-3"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <CTAButton />
                        <a
                            className='flex gap-x-3 items-center text-[#D47FA6] hover:text-[#70cbdd] transition-colors duration-300'
                            href="https://www.google.com/maps/place/Your+Store+Address"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaMapMarkerAlt className="w-6 h-6" />
                            <p className="underline">Endereço da loja</p>
                        </a>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default About;
