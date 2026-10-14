"use server";

import { signOut } from "@/auth";

export async function encerrarSessao() {
  await signOut({ redirectTo: "/" });
}