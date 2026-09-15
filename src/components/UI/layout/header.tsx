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
              className={`px-3 py-1 
              ${isActive ? "text-blue-500" : "text-foreground"} 
              hover:text-blue-300 hover:border
              hover:border-blue-300 hover:rounded-md
              transition-colors
              transition-border
              duration-200`}
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
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        {isAuth && <p>Hallo, {session?.user?.email}!</p>}

        {status === "loading" ? (
          <p>Wird geladen...</p>
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
                variant="flat"
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
