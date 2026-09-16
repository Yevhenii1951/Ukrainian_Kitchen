"use client";

import { registerUser } from "@/actions/register";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await registerUser(formData);

    if ("error" in result) {
      setError(result.error);
      return;
    }

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="E-Mail eingeben"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none "
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "E-Mail ist erforderlich";
          if (!validateEmail(value)) return "Ungültige E-Mail-Adresse";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Passwort eingeben"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none "
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Passwort ist erforderlich";
          if (value.length < 6)
            return "Das Passwort muss mindestens 6 Zeichen lang sein";
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Passwort bestätigen"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none "
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Passwortbestätigung ist erforderlich";
          if (value !== formData.password) return "Passwörter stimmen nicht überein";
          return null;
        }}
      />

      <div className="flex w-[100%]  gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Abbrechen
        </Button>
        <Button color="primary" type="submit">
          Registrieren
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
