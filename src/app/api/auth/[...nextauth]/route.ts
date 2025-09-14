import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const adapter = PrismaAdapter(prisma);

// Store the original createUser function
const { createUser: originalCreateUser } = adapter;

const customPrismaAdapter = {
  ...adapter,
  createUser: async (user: any) => {
    // Access the original createUser method from the adapter
    if (!originalCreateUser) {
      throw new Error("originalCreateUser is undefined");
    }
    return originalCreateUser({
      ...user,
      id: undefined, // Ensure the `id` is omitted as expected
    });
  },
};

export const authOptions = {
  adapter: customPrismaAdapter,
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'jwt' as 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};



