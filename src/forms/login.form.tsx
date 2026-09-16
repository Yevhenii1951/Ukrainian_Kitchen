"use client";

import { signInWithCredentials } from "@/actions/sign-in";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = await signInWithCredentials(
      formData.email,
      formData.password
    );

    if (result.error) {
      setError(result.error);
      return;
    }

    window.location.reload();
    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
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
          return null;
        }}
      />

      {error && (
        <p className="text-danger text-sm w-full">{error}</p>
      )}

      <div className="flex w-[100%]  gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Abbrechen
        </Button>
        <Button color="primary" type="submit">
          Anmelden
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
