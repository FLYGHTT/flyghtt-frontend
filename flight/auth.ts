import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/validations/signin";
import { getUser } from "./lib/actions/user.actions";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      isVerified: boolean;
      id: string;
      token: string;
      role: string;
    };
  }
  interface User {
    userId: string;
    emailVerified: boolean;
    role: string;
    token: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 3600 * 12,
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          const user = await getUser(email, password);
          console.log(user, "authuser");

          if (!user) {
            throw new Error("User not found.");
          }

          return {
            ...user,
            token: user.token as string,
          };
        } catch (error: any) {
          // Handle Zod validation error (Invalid input)
          if (error instanceof ZodError) {
            throw new Error("Invalid input.");
          }

          // Handle any other custom errors (e.g., user not found, wrong password)
          throw new Error(error.message || "Something went wrong.");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.userId;
        token.isVerified = user.emailVerified;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id as string;
      session.user.isVerified = token.isVerified as boolean;
      session.user.role = token.role as string;
      session.user.token = token.token as string;
      return session;
    },
  },

  debug: true,
  pages: {
    error: "/login",
    signIn: "/login",
  },
});
