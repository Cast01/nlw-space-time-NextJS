import { User } from 'lucide-react'

export function Header() {
    return (
        <div>
            <div className="flex h-10 w-full gap-3">
                <div className="flex h-full w-10 items-center justify-center rounded-[50%] bg-gray-400">
                    <User className="h-4 w-4" />
                </div>
                <div className="w-36">
                    <p className="text-sm">
                        <a
                            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
                            className="text-blue-500 underline hover:text-blue-400"
                        >
                            Crie sua conta
                        </a>{' '}
                        e salve suas memórias!
                    </p>
                </div>
            </div>
        </div>
    )
}
