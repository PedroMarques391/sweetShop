"use client"
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowForward, IoIosArrowBack, IoIosBonfire, IoIosSnow, IoIosColorPalette, IoIosIceCream } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import { ReactElement } from "react";
import { BiCake } from "react-icons/bi";
import CTAButton from "../ui/CTAButton";


interface IMenuItems {
    title: string;
    description: string;
    duration: string;
    price: string;
    icon: ReactElement;
    linkText: string;
}


const menuItems: IMenuItems[] = [
    {
        title: "Cupcakes",
        description: "Deliciosos cupcakes em diversos sabores, decorados com cobertura cremosa.",
        duration: "Fresco do dia",
        price: "R$ 10,00 cada",
        icon: <IoIosIceCream />,
        linkText: "Quais sabores de cupcake?"
    },
    {
        title: "Macarons",
        description: "Tradicionais macarons franceses em cores e sabores variados.",
        duration: "Feito diariamente",
        price: "R$ 5,00 cada",
        icon: <IoIosColorPalette />,
        linkText: "Quais sabores de macarons?"
    },
    {
        title: "Tortas e Bolos",
        description: "Tortas e bolos artesanais perfeitos para qualquer ocasião.",
        duration: "Sob encomenda",
        price: "A partir de R$ 80,00",
        icon: <BiCake />,
        linkText: "Quais opções de tortas e bolos?"
    },
    {
        title: "Brigadeiros Gourmet",
        description: "Brigadeiros feitos com chocolate belga e ingredientes premium.",
        duration: "Fresco do dia",
        price: "R$ 3,50 cada",
        icon: <IoIosBonfire />,
        linkText: "Quais sabores de brigadeiros?"
    },
    {
        title: "Sobremesas Geladas",
        description: "Mousses, pavês e outras sobremesas geladas deliciosas.",
        duration: "Pronto para servir",
        price: "R$ 15,00 cada",
        icon: <IoIosSnow />,
        linkText: "Quais sobremesas geladas?"
    }
];

const Services = (): React.JSX.Element => {
    const [embraRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {
                slidesToScroll: 3,
            },
        },
    })

    function scrollPrev(): void {
        emblaApi?.scrollPrev()
    }

    function scrollNext(): void {
        emblaApi?.scrollNext()
    }

    return (
        <section className='bg-[#FDFDFD] py-16'>
            <div className="container mx-auto px-4">
                <h1 className='text-4xl mb-12 text-[#D47FA6] font-bold'>Nosso Cardápio</h1>
                <div className='relative'>
                    <div className="overflow-hidden" ref={embraRef}>
                        <div className="flex">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                                >
                                    <article
                                        className="bg-[#FAF3E0] text-[#3E3E3E] rounded-2xl p-6 flex flex-col gap-y-4 select-none shadow-lg hover:shadow-2xl transition-shadow duration-500"
                                    >
                                        <div className="flex-1 flex flex-col items-center justify-between">
                                            <div className="flex gap-3 items-center">
                                                <span className="text-4xl text-[#D47FA6]">{item.icon}</span>
                                                <div>
                                                    <h1 className="font-bold text-xl my-1 text-[#D47FA6]">{item.title}</h1>
                                                    <p className="text-gray-600 select-none h-16 text-sm">
                                                        {item.description}
                                                    </p>
                                                    <p className="text-[#D47FA6]">{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t-2 border-[#FADADD] flex justify-between items-center mt-4 pt-2">
                                            <div className="flex p-3 items-center gap-2 text-sm text-gray-500">
                                                <CiClock1 className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <CTAButton styles="bg-[#fccfda] hover:bg-[#FFABAB] p-3" message={item.linkText} text="Ver mais" />
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

export default Services