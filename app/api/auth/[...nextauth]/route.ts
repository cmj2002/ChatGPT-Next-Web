import NextAuth from "next-auth";
import ZitadelProvider from "next-auth/providers/zitadel";

const handler = NextAuth({
  providers: [
    // @ts-ignore we don't need to pass a clientSecret for PKCE, but the type definition requires it
    ZitadelProvider({
      name: "OIDC",
      issuer: process.env.ZITADEL_ISSUER as string,
      clientId: process.env.ZITADEL_CLIENT_ID as string,
      // the following is required for PKCE without a client secret
      client: {
        token_endpoint_auth_method: "none",
      },
    }),
  ],
});

export { handler as GET, handler as POST };
