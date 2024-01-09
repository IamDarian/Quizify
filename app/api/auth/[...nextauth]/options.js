import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import { connectDatabase } from "@/utils/database";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("GitHub Profile: ", profile);

        let userRole = "GitHub User";
        if (profile?.email === "silisteanudarian@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Google Profile: ", profile);

        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // email: {
        //   label: "email:",
        //   type: "text",
        //   placeholder: "your-email",
        // },
        // password: {
        //   label: "password:",
        //   type: "password",
        //   placeholder: "your-password",
        // },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        console.log(credentials);
        await connectDatabase();

        try {
          const foundUser = await User.findOne({
            email: email,
          }).lean();

          if (foundUser) {
            console.log("User Exists");

            if (foundUser.password === credentials.password) {
              console.log("Good Pass");
              delete foundUser.password;

              foundUser["role"] = "Unverified Email";
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
