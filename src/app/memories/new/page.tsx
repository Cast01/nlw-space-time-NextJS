'use client'

import Link from 'next/link'
import { Camera, CaretDoubleLeft } from 'phosphor-react'

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link
                href={'/'}
                className="flex items-center gap-1 text-sm text-blue-500 underline hover:text-blue-400"
            >
                <CaretDoubleLeft />
                voltar à timeline
            </Link>

            <form className="flex flex-1 flex-col gap-2">
                <div className="flex items-center gap-3">
                    <div className="flex w-fit items-center gap-4">
                        <label
                            htmlFor="media"
                            className="flex cursor-pointer items-center gap-1 text-gray-200 underline hover:text-gray-100"
                        >
                            <Camera size={'1.5rem'} />
                            anexar media
                        </label>
                        <input
                            type="file"
                            id="media"
                            className="invisible w-0"
                        />
                    </div>
                    <label
                        htmlFor="public"
                        className="flex cursor-pointer items-center gap-1 text-gray-200 underline hover:text-gray-100"
                    >
                        <input
                            type="checkbox"
                            id="public"
                            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
                        />
                        Tornar memória pública
                    </label>
                </div>
                <textarea
                    name="content"
                    spellCheck={false}
                    className="flex-1 resize-none rounded border-0 bg-transparent leading-relaxed text-gray-100 placeholder:text-gray-400"
                    placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
                />
            </form>
        </div>
    )
}
