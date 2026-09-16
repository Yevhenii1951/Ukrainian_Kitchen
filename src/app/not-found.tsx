"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 py-20">
      <div className="text-center">
        <p className="font-serif text-5xl font-bold text-borsch">404</p>
        <p className="mt-2 text-muted">Diese Seite konnte nicht gefunden werden.</p>
      </div>
      <Button
        as={Link}
        color="primary"
        href="/"
        className="mt-2"
      >
        Zurück zur Startseite
      </Button>
    </div>
  );
}