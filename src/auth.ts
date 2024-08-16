import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";
import authConfig from "./auth.config";
import { getAccountByUserId } from "./lib/data/accounts";
import { getUserById } from "./lib/data/user";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./page_routes";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
      const isAuthorized = !!auth;

      const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
      const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
      const isAuthRoute = authRoutes.includes(nextUrl.pathname);

      if (isApiAuthRoute) {
        return true;
      }

      if (isAuthRoute) {
        if (isAuthorized) {
          return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return true;
      }

      if (!isAuthorized && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;

        if (nextUrl.search) {
          callbackUrl += nextUrl.search;
        }

        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return Response.redirect(
          new URL(`/auth/signin?callbackUrl=${encodedCallbackUrl}`, nextUrl),
        );
      }

      return true;
    },
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id!);

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false;

      return true;
    },

    async session({ token, session }: any) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },

    async jwt({ token, user, trigger, session, account }) {
      if (!token.sub) return token;

      // ***************************************************************
      // added code
      if (trigger === "update" && session) {
        token = { ...token, user: session };
        return token;
      }

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;

      return token;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // return url.startsWith(baseUrl) ? url : baseUrl;
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
