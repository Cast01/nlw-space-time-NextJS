import { ReactNode } from 'react'

import './globals.css'

import {
    Bai_Jamjuree as BaiJamJuree,
    Roboto_Flex as Roboto,
} from 'next/font/google'
import { cookies } from 'next/dist/client/components/headers'
import { Profile } from '@/components/Profileteste'
import { Header } from '@/components/Headerteste'
import { Main } from '@/components/Mainteste'
import { Footer } from '@/components/Footerteste'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamJuree = BaiJamJuree({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-baiJamJuree',
})

export const metadata = {
    title: 'NLW Space Time',
    description:
        'Uma cápsula do tempo construída com React, NextJS, TailwindCSS e Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    const isAuthenticated = cookies().get('token')?.value

    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
            >
                <div className="grid min-h-screen grid-cols-2">
                    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden border-r border-white/10 bg-[url(../assets/images/bg-left-right.png)] bg-cover p-4">
                        {/* Blur */}
                        <div className="absolute -right-1/2 top-1/2 h-[288px] w-[526px] -translate-y-1/2 rounded-[50%] bg-purple-700 opacity-50 blur-full" />

                        {/* Traces */}
                        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

                        <div className="flex h-[95%] w-[90%] max-w-[26.25rem] flex-col justify-between">
                            {isAuthenticated ? <Profile /> : <Header />}
                            <Main />
                            <Footer />
                        </div>
                    </div>
                    <div className="flex flex-col bg-[url(../assets/images/bg-left-right.png)] bg-cover p-16">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
