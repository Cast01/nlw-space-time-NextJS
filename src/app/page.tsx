import { EmptyMemories } from '@/components/Memoriesteste'
import { api } from '@/lib/apiteste'
import { cookies } from 'next/dist/client/components/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
dayjs.locale(ptBr)

type Memory = {
    id: string
    coverUrl: string
    exerpt: string
    createdAt: string
}

export default async function Home() {
    const isAuthenticated = !!cookies().get('token')?.value

    if (!isAuthenticated) {
        return <EmptyMemories />
    }

    const token = cookies().get('token')?.value
    const response = await api.get('/memories', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    const memoriesList: Memory[] = response.data

    if (memoriesList.length === 0) {
        return <EmptyMemories />
    }

    return (
        <ul className="flex flex-1 flex-col gap-10 overflow-auto">
            {memoriesList.map((memory) => {
                return (
                    <li key={memory.id} className="space-y-4">
                        <time className="flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
                            {dayjs(memory.createdAt).format(
                                'D[ de ]MMMM[, ]YYYY',
                            )}
                        </time>
                        <Image
                            src={memory.coverUrl}
                            alt=""
                            width={500}
                            height={250}
                            className="aspect-video w-full object-cover px-4"
                        />
                        <p className="px-4 text-lg leading-relaxed text-gray-100">
                            {memory.exerpt}
                        </p>
                        <Link
                            href={`/memories/${memory.id}`}
                            className="flex items-center gap-2 px-4 text-sm text-blue-500 underline hover:text-blue-400"
                        >
                            Ler mais
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
