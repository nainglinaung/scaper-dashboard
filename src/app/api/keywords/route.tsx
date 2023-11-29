import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { keywordSchema } from '@/app/schema/keyword.schema';
import prisma from '../../../../prisma/client';
export const GET = async (request: NextRequest) => {

    const token = await getToken({ req: request });
    console.log(token);

    return NextResponse.json(token)
}

export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const validationResult = keywordSchema.safeParse(body);

    if (!validationResult.success) {
        return NextResponse.json(validationResult.error.errors, { status: 400 });
    }

    const user_session = await getToken({ req: request });

    const user = await prisma.user.findUnique({ where: { email: user_session?.email! } });

    // if keyword exist, update the status 

    const keyword = await prisma.search_results.findFirst({ where: { userId:user?.id, keyword: body.name! } });

    if (keyword) {
        await prisma.search_results.update({
            where: { id: keyword.id }, data: {
                scraping_status: "Inprogress"
            }
        });

    } else {
        await prisma.search_results.create({ data: { keyword: body.name, userId: user?.id! } });
    }

   
    return NextResponse.json({status:"success"});
}