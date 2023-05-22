import { FormSubmitMemory } from '@/components/FormSubmitMemoryteste'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <Link
                href={'/'}
                className="flex items-center gap-1 text-sm text-blue-500 underline hover:text-blue-400"
            >
                <ArrowLeft className="h-4 w-4" />
                voltar à timeline
            </Link>
            <FormSubmitMemory />
        </div>
    )
}
