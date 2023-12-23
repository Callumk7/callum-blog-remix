import { Link, useLocation } from "@remix-run/react";
import { SocialLinks } from "./social-links";
import clsx from "clsx";

export function Navbar() {
  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "photography",
      href: "/photography",
    },
    {
      name: "about",
      href: "/about",
    },
  ];

  const location = useLocation();

  return (
    <nav className="fixed z-50 flex w-full flex-row justify-between items-center border-b border-foreground/20 bg-background/80 px-48 py-5 backdrop-blur">
      <div className="flex flex-row gap-x-9">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={clsx(
              "hover:bg-background-hover px-3 py-2 rounded-md",
              location.pathname === link.href ? "text-primary-1" : "text-foreground",
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <SocialLinks />
    </nav>
  );
}
