"use server";

import { signIn } from "@/auth/auth";
import { getUserFromDb } from "@/utils/user";
import bcryptjs from "bcryptjs";

export async function signInWithCredentials(
  email: string,
  password: string
): Promise<{ error?: string }> {
  const user = await getUserFromDb(email);

  if (!user || !user.password) {
    return { error: "E-Mail-Adresse nicht gefunden" };
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
    return { error: "Passwort ist ungültig" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    return {};
  } catch {
    return { error: "Anmeldung fehlgeschlagen" };
  }
}
