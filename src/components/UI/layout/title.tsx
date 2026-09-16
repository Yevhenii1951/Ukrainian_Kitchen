"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();

  const currentNavItem = siteConfig.navItems.find(
    (item) => item.href === pathname
  );

  const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title;

  return (
    <div className="w-full flex flex-col items-center my-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">
        {pageTitle}
      </h1>
      <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-borsch via-sunflower to-dill" />
    </div>
  );
};

export default Title;