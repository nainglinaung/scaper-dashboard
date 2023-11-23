import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";


export const AuthOptions: NextAuthOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "" },
            },
            async authorize(credentials) {
                const authResponse = await fetch("/users/login", {
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
  
                return user
            },
        }),
    ],
};
  
const handler = NextAuth(AuthOptions);

export {handler as GET, handler as POST}

