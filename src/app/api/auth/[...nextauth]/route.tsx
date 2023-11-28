import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../../prisma/client";
import Google from "next-auth/providers/google";


export const AuthOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    session:{
        strategy:"jwt"
    },
};
  
const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST}

