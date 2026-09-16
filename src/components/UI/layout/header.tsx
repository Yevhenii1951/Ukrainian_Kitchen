"use client";

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";
import { signOutFunc } from "@/actions/sign-out";
import { useAuthStore } from "@/store/auth.store";

export default function Header() {
  const pathname = usePathname();

  const { isAuth, session, status, setAuthState } = useAuthStore();

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOutFunc();
    } catch (error) {
      console.error("error", error);
    }

    setAuthState("unauthenticated", null);
  };

  const getNavItems = () => {
    return siteConfig.navItems
      .filter((item) => {
        if (item.href === "/ingredients") {
          return isAuth;
        }
        return true;
      })
      .map((item) => {
        const isActive = pathname === item.href;

        return (
          <NavbarItem key={item.href}>
            <Link
              color="foreground"
              href={item.href}
              className={`relative px-3 py-1 text-sm transition-colors duration-200
              ${
                isActive
                  ? "text-borsch font-medium after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-borsch"
                  : "text-foreground hover:text-borsch"
              }`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        );
      });
  };

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1 items-center">
          <p className="font-serif text-xl font-bold text-borsch">
            {siteConfig.title}
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        {isAuth && (
          <p className="hidden md:block text-sm text-muted">
            Hallo, {session?.user?.email}!
          </p>
        )}

        {status === "loading" ? (
          <p className="text-sm text-muted">Wird geladen...</p>
        ) : !isAuth ? (
          <>
            <NavbarItem>
              <Button
                as={Link}
                color="secondary"
                href="#"
                variant="flat"
                onPress={() => setIsLoginOpen(true)}
              >
                Anmelden
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                onPress={() => setIsRegistrationOpen(true)}
              >
                Registrieren
              </Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="secondary"
              href="#"
              variant="flat"
              onPress={handleSignOut}
            >
              Abmelden
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}