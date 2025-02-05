import { StaticImageData } from "next/image";
import image1 from "../../../public/img/gallery.webp";
import image2 from "../../../public/img/gallery2.webp";
import image3 from "../../../public/img/gallery3.webp";
import image4 from "../../../public/img/gallery4.webp";
import image5 from "../../../public/img/gallery5.webp";
import image6 from "../../../public/img/gallery6.webp";

interface IGalleryInterface {
    logo: StaticImageData
    text: string
}

const gallery: IGalleryInterface[] = [
    { logo: image1, text: "Ótimo ambiente" },
    { logo: image2, text: "Doces deliciosos" },
    { logo: image3, text: "Bolos artísticos" },
    { logo: image4, text: "Variedade de doces" },
    { logo: image5, text: "Café da manhã" },
    { logo: image6, text: "Sabores incríveis" },
];

interface Testimonial {
    name: string;
    feedback: string;
    date: string;
    stars: number;
}

const testimonials: Testimonial[] = [
    {
        name: "João Silva",
        feedback: "Os doces são maravilhosos! Adorei a apresentação e o sabor incrível.",
        date: "02/02/2025",
        stars: 5,
    },
    {
        name: "Maria Oliveira",
        feedback: "Ótima variedade de doces, mas senti falta de opções veganas.",
        date: "01/02/2025",
        stars: 4,
    },
    {
        name: "Carlos Almeida",
        feedback: "A melhor doceria que já conheci! Atendimento e qualidade impecáveis.",
        date: "28/01/2025",
        stars: 5,
    },
    {
        name: "Ana Clara",
        feedback: "Os cupcakes são deliciosos, mas achei os preços um pouco altos.",
        date: "20/01/2025",
        stars: 4,
    },
    {
        name: "Pedro Henrique",
        feedback: "A decoração da loja é linda, mas a espera foi um pouco longa.",
        date: "15/01/2025",
        stars: 3,
    },
    {
        name: "Juliana Santos",
        feedback: "Tudo perfeito! Doces deliciosos, atendimento rápido e ótimo ambiente.",
        date: "10/01/2025",
        stars: 5,
    },
]





export {
    gallery,
    testimonials
}
