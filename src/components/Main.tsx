import Image from 'next/image'

import nlwLogo from '../assets/images/logo.svg'
import Link from 'next/link'

export function Main() {
    return (
        <main className="flex flex-col gap-5 text-sm">
            <Image src={nlwLogo} alt="" />
            <div>
                <h1 className="text-4xl font-bold text-gray-50">
                    Sua cápsula do tempo
                </h1>
                <p>
                    Colecione momentos marcantes da sua jornada e compartilhe
                    com o mundo! (se quiser)
                </p>
            </div>
            <Link
                href="/memories/new"
                className="w-fit rounded-full bg-green-500 px-5 py-3 font-baiJamJuree text-[#09090a] hover:bg-green-400"
            >
                CADASTRAR LEMBRANÇA
            </Link>
        </main>
    )
}
