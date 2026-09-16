"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message") || "Unbekannter Fehler";

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p className="text-red-500 text-xl">{message}</p>
      <Button as={Link} color="primary" variant="shadow" href="/">
        Zurück zur Startseite
      </Button>
    </div>
  );
};

export default ErrorPage;
