import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: 'fda86e4f44c5923efb56',
      clientSecret: '7bd71d3b6cc79f005f5893ba78a8e13c04f0f44c',
      scope:'read:user'
    }),
    // ...add more providers here
  ],
})
