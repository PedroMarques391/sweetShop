import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

interface IButtonsProps {
    styles?: string
    message?: string
    text?: string
}

const CTAButton = ({
    styles,
    message = "Olá, gostaria de saber mais sobre os produtos",
    text = "Contato via WhatsApp"
}: IButtonsProps) => {
    return (
        <Link
            target='_blank'
            rel="noreferrer nofollow"
            className={` p-4 rounded-md bg-green-500 font-semibold text-white w-fit flex justify-center items-center  gap-x-2 ${styles}`}
            href={`https://wa.me/5591999999999?text=${message}.
`}
            data-aos="zoom-in"
            data-aos-delay="600"
        >
            <BsWhatsapp />
            <span>{text}</span>
        </Link>
    )
}

export default CTAButton