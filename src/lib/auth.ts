import { cookies } from 'next/dist/client/components/headers'

import decode from 'jwt-decode'

type User = {
    sub: string
    name: string
    avatarUrl: string
}

export function getUser(): User {
    const token = cookies().get('token')?.value

    if (!token) {
        throw new Error('error')
    }

    const user: User = decode(token)

    return user
}
