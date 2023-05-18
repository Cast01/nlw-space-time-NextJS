'use client'

import Image from 'next/image'

import { User } from 'phosphor-react'

import nlwLogo from '../assets/images/logo.svg'

export default function Home() {
    return (
        <div className="grid min-h-screen grid-cols-2">
            {/* Left */}
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden border-r border-white/10 bg-[url(../assets/images/bg-left-right.png)] bg-cover p-4">
                {/* Blur */}
                <div className="absolute -right-1/2 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-[50%] bg-purple-700 opacity-50 blur-full" />

                {/* Traces */}
                <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

                <div className="flex h-[95%] w-[90%] max-w-[26.25rem] flex-col justify-between">
                    {/* Header */}
                    <div className="flex h-10 w-full gap-3">
                        <div className="flex h-full w-10 items-center justify-center rounded-[50%] bg-gray-400">
                            <User size={'1rem'} weight="bold" />
                        </div>
                        <div className="w-36">
                            <p className="text-sm">
                                <a
                                    href="#"
                                    className="text-blue-500 underline hover:text-blue-400"
                                >
                                    Crie sua conta
                                </a>{' '}
                                e salve suas memórias!
                            </p>
                        </div>
                    </div>
                    {/* Main */}
                    <main className="flex flex-col gap-5 text-sm">
                        <Image src={nlwLogo} alt="" />
                        <p>
                            <h1 className="text-4xl font-bold text-gray-50">
                                Sua cápsula do tempo
                            </h1>
                            Colecione momentos marcantes da sua jornada e
                            compartilhe com o mundo! (se quiser)
                        </p>
                        <a
                            href="#"
                            className="w-fit rounded-full bg-green-500 px-5 py-3 font-baiJamJuree text-[#09090a] hover:bg-green-400"
                        >
                            CADASTRAR LEMBRANÇA
                        </a>
                    </main>
                    {/* Footer */}
                    <footer>
                        <p>
                            Feito com 💜 no NLW da{' '}
                            <a
                                href="#"
                                className="text-blue-500 underline hover:text-blue-400"
                            >
                                Rocketseat
                            </a>
                        </p>
                    </footer>
                </div>
            </div>

            {/* Right */}
            <div className="flex flex-col bg-[url(../assets/images/bg-left-right.png)] bg-cover p-16">
                <div className="flex flex-1 items-center justify-center">
                    <p className="w-[22.5rem] text-center leading-relaxed">
                        Você ainda não registrou nenhuma lembrança, começe a{' '}
                        <a
                            href="#"
                            className="text-blue-500 underline hover:text-blue-400"
                        >
                            criar agora
                        </a>
                        !
                    </p>
                </div>
            </div>
        </div>
    )
}
