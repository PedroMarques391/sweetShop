import Image from 'next/image';
import React from 'react';
import HeroImage from "../../../public/img/hero.webp";
import CTAButton from '../ui/CTAButton';


const Hero = (): React.JSX.Element => {
    return (
        <section
            className="bg-[#FADADD] text-white md:text-[#4A4A4A] relative overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <Image
                sizes="(max-width: 720px) 100vw, 0vw"
                fill
                className="object-cover opacity-60 md:hidden "
                alt="Foto da loja"
                src={HeroImage}
                quality={80}
                priority
                data-aos="zoom-in"
                data-aos-duration="1000"
            />
            <div
                className="absolute inset-0 bg-black/50 md:hidden"
                data-aos="fade"
                data-aos-duration="800"
                data-aos-delay="200"
            />

            <div
                className="container mx-auto pb-16 md:pb-0 px-4 relative"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1
                            className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10 pt-10"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            Os melhores momentos são feitos de doces e carinho!
                        </h1>
                        <p
                            className="lg:text-lg"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Oferecemos doces personalizados para adoçar os momentos especiais e garantir a felicidade de quem você ama.
                        </p>
                        <CTAButton />
                        <div className="my-8  pb-10" data-aos="fade-up" data-aos-delay="800">
                            <p className="text-sm mb-4">
                                <b className="p-2 bg-black text-white rounded-lg">
                                    15%
                                </b>{" "}
                                de desconto no primeiro pedido.
                            </p>
                        </div>
                    </div>

                    <div
                        className="hidden md:block h-full relative bg-red-100"
                        data-aos="fade-left"
                        data-aos-duration="1200"
                    >
                        <Image
                            sizes="(max-width: 720px) 0vw, 100vw"
                            fill
                            className="object-cover"
                            alt="Foto da Loja"
                            src={HeroImage}
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Hero;
