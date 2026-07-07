import { betterAuth } from "better-auth";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export const auth = betterAuth({
  database: sql,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },

    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});