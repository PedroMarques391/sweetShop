import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import CTAButton from '../ui/CTAButton'
import Link from 'next/link'

const Footer = (): React.JSX.Element => {
    return (
        <footer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 pt-3 bg-[#FADADD] text-black px-8 md:place-items-center"
        >
            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-3xl font-bold">SweetShop</h2>
                <p>Deliciando sua vida com doces e carinho.</p>
                <CTAButton styles='mt-6 bg-green-500' />
            </div>

            <div className="flex flex-col items-center md:items-start">
                <h2 className="text-3xl font-bold">Contato</h2>
                <p>Rua das Flores, 456</p>
                <p>São Paulo, SP - CEP: 98765-432</p>
                <p>Tel: (11) 9876-5432</p>
                <p>Email: contato@sweetshop.com</p>
            </div>

            <div className="flex flex-col items-start justify-center mx-auto md:col-span-2 lg:col-span-1">
                <h2 className="text-3xl font-bold">Redes Sociais</h2>
                <section className="flex space-x-4 mt-2 mx-auto">
                    <Link
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 flex items-center justify-center hover:text-[#70cbdd] rounded-full"
                    >
                        <FaFacebook className='w-full h-full' />
                    </Link>
                    <Link
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 flex items-center justify-center hover:text-[#70cbdd] rounded-full"
                    >
                        <BsInstagram className='w-full h-full' />
                    </Link>
                    <Link
                        href="https://www.x.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 flex items-center justify-center hover:text-[#70cbdd] rounded-full"
                    >
                        <FaXTwitter className='w-full h-full' />
                    </Link>
                </section>
            </div>

            <div className="col-span-full text-center text-sm mt-4">
                © 2025 SweetShop. Todos os direitos reservados.
            </div>
        </footer>

    )
}

export default Footer