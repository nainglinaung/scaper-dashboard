import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../../prisma/client";
import Google from "next-auth/providers/google";


export const AuthOptions: NextAuthOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "" },
            },
            async authorize(credentials) {

                const authResponse = await fetch("http://localhost:3001/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                })
  
                if (!authResponse.ok) {
                    return null
                }
  
                const user = await authResponse.json()
  
                return user;
            },
            
            
        }),
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

