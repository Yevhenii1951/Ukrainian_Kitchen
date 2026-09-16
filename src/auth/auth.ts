import bcryptjs from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/schema/zod";
import { getUserFromDb } from "@/utils/user";
import prisma from "@/utils/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Account",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("E-Mail und Passwort sind erforderlich");
        }

        const { email, password } = await signInSchema.parseAsync(
          credentials
        );

        const user = await getUserFromDb(email);

        if (!user || !user.password) {
          throw new Error("E-Mail oder Passwort ist ungültig");
        }

        const isPasswordValid = await bcryptjs.compare(
          password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("E-Mail oder Passwort ist ungültig");
        }

        return { id: user.id, email: user.email };
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 3600
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
});
