import { EmptyMemories } from '@/components/Memoriesteste'
import { api } from '@/lib/apiteste'
import { cookies } from 'next/dist/client/components/headers'

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

    const memoriesList = response.data

    return <div>{JSON.stringify(memoriesList)}</div>
}
