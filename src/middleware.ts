import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const isAuthenticated = !!request.cookies.get('token')?.value

    const loginRoute = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

    if (!isAuthenticated) {
        return NextResponse.redirect(loginRoute, {
            headers: {
                'Set-Cookie': `redirectTo=${request.url}; path=/; HttpOnly; max-age=10;`,
            },
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/memories/:path*',
}
