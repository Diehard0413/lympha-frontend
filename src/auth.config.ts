import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");
import prisma from "./lib/prisma";

export default {
  providers: [
    Credentials({
      async authorize(credentials: any) {
        if (credentials) {
          const {
            email,
            password,
          }: {
            email: string;
            password: string;
          } = credentials;
          if (email && password) {
            const user = await prisma.user.findUnique({
              where: { email },
            });

            if (!user?.password) return null;

            const passwordsMatch = await bcrypt.compare(
              password,
              user.password,
            );
            console.log("passwordsMatch", passwordsMatch);
            if (passwordsMatch) return user;
            console.log("Password does not match");

            throw new Error("Invalid password");
          }
          return null;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
