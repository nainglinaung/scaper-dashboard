import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {

    const token = await getToken({ req: request });
    console.log(token);

    return NextResponse.json(token)
}

