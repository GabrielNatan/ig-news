import { query  as q} from "faunadb"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { fauna } from "../../../services/fauna"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: 'fda86e4f44c5923efb56',
      clientSecret: '7bd71d3b6cc79f005f5893ba78a8e13c04f0f44c',
      scope:'read:user'
    }),
  ],
  callbacks: {
    async signIn( user, account, profile ) {
      const { email } = user
     
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email2'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection("users"),
              {data: {email}}
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email2'),
                q.Casefold(user.email)
              )
            )
          )

          
        )
        return true
      } catch (error) {
        return false
      }
     
    },
  }
})
