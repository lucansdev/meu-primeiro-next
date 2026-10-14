import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import type { Papel } from "@/lib/tipos";

const credenciais = z.object({
  email: z.email("Informe um e-mail válido."),
  senha: z.string().min(8, "A senha precisa ter ao menos 8 caracteres."),
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/entrar" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "E-mail", type: "email" },
        senha: { label: "Senha", type: "password" },
      },
      authorize: async (credenciaisRecebidas) => {
        const resultado = credenciais.safeParse(credenciaisRecebidas);
        if (!resultado.success) return null;

        const usuario = await prisma.usuario.findUnique({
          where: { email: resultado.data.email.toLowerCase() },
        });
        if (!usuario) return null;

        const senhaConfere = await compare(resultado.data.senha, usuario.senhaHash);
        if (!senhaConfere) return null;

        return {
          id: usuario.id,
          name: usuario.nome,
          email: usuario.email,
          papel: usuario.papel as Papel,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.papel = user.papel;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.papel = token.papel as Papel;
      }
      return session;
    },
  },
});