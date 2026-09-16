"use server";

import { IFormData } from "@/types/form-data";
import { saltAndHashPassword } from "@/utils/password";
import prisma from "@/utils/prisma";

type RegisterResult =
  | { success: true; user: { id: string; email: string } }
  | { error: string };

export async function registerUser(
  formData: IFormData
): Promise<RegisterResult> {
  const { email, password, confirmPassword } = formData;

  if (password !== confirmPassword) {
    return { error: "Passwörter stimmen nicht überein" };
  }

  if (password.length < 6) {
    return { error: "Das Passwort muss mindestens 6 Zeichen lang sein" };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { error: "Ein Benutzer mit dieser E-Mail existiert bereits" };
    }

    const pwHash = await saltAndHashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: pwHash
      }
    });

    return { success: true, user: { id: user.id, email: user.email } };
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    return { error: "Fehler bei der Registrierung" };
  }
}
