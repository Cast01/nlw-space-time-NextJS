'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
    const [preview, setPreview] = useState<string | null>(null)

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target

        if (!files) {
            return
        }

        const previewUrl = URL.createObjectURL(files[0])

        setPreview(previewUrl)
    }

    return (
        <div>
            <input
                type="file"
                name="coverUrl"
                id="media"
                accept="image/*"
                className="invisible h-0 w-0"
                onChange={onFileSelected}
            />
            {preview && (
                <Image
                    src={preview}
                    alt=""
                    className="reounded-lg aspect-video w-full object-cover"
                    width={500}
                    height={200}
                />
            )}
        </div>
    )
}
