import { getUser } from '@/lib/authteste'
import Image from 'next/image'

export function Profile() {
    const { avatarUrl, name } = getUser()

    return (
        <div>
            <div className="flex h-10 w-full gap-3">
                <Image
                    src={avatarUrl}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex h-full flex-1 items-center justify-between">
                    <span>{name}</span>
                    <a
                        href={'api/auth/logout/'}
                        className="flex h-full items-center rounded-md bg-red-500 px-4 text-white transition-colors hover:bg-red-700"
                    >
                        Sair
                    </a>
                </div>
            </div>
        </div>
    )
}
