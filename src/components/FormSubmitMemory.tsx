'use client'

import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'

export function FormSubmitMemory() {
    return (
        <form className="flex flex-1 flex-col gap-2">
            <div className="flex items-center gap-3">
                <div className="flex w-fit items-center gap-4">
                    <label
                        htmlFor="media"
                        className="flex cursor-pointer items-center gap-1 text-gray-200 underline hover:text-gray-100"
                    >
                        <Camera />
                        anexar media
                    </label>
                </div>
                <label
                    htmlFor="isPublic"
                    className="flex cursor-pointer items-center gap-1 text-gray-200 underline hover:text-gray-100"
                >
                    <input
                        type="checkbox"
                        name="isPublic"
                        id="isPublic"
                        value="true"
                        className="h-5 w-5 rounded border-gray-400 bg-gray-700 text-purple-500"
                    />
                    Tornar memória pública
                </label>
            </div>
            <MediaPicker />
            <textarea
                name="content"
                spellCheck={false}
                className="flex-1 resize-none rounded border-0 border-blue-500 bg-transparent text-base leading-relaxed text-gray-100 placeholder:text-gray-400"
                placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            />
            <button
                type="submit"
                className="w-fit self-end rounded-full bg-green-500 px-5 py-3 font-baiJamJuree text-[#09090a] hover:bg-green-400"
            >
                ENVIAR
            </button>
        </form>
    )
}
