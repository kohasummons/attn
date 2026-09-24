"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ContactDialog } from "./contact-dialog";
import { asset, PageContainer } from "./primitives";
import { links } from "./content";

const serviceLinks = [
  { label: "Our services", href: links.services },
  { label: "Training for organizations", href: "/v2/organizations" },
];
const hqLinks = [
  { label: "Courses", href: links.university },
  { label: "Join the HQ", href: links.waitlist },
  { label: "About us", href: "/about" },
];
const mainLinks = [
  { label: "Labs", href: "/labs" },
  { label: "Workshops", href: links.workshops },
  { label: "Events", href: "/#events" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="af-header">
      <PageContainer className="af-header-inner">
        <Link href="/" aria-label="Attention Factory home">
          <Image
            src={asset("3357b.png")}
            alt="Attention Factory"
            width={199}
            height={26}
            priority
          />
        </Link>
        <NavigationMenu className="af-desktop-nav" aria-label="Main navigation">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href="/labs" />}>
                Labs
              </NavigationMenuLink>
            </NavigationMenuItem>
            {[
              { label: "Services", items: serviceLinks },
              { label: "Attention HQ", items: hqLinks },
            ].map((group) => (
              <NavigationMenuItem key={group.label}>
                <NavigationMenuTrigger>{group.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="af-nav-dropdown">
                  {group.items.map((item) => (
                    <NavigationMenuLink
                      key={item.href}
                      render={<Link href={item.href} />}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {mainLinks.slice(1).map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink render={<Link href={item.href} />}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="af-header-contact">
          <ContactDialog />
        </div>
        <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="af-mobile-toggle"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </DialogTrigger>
          <DialogContent className="af-mobile-menu">
            <DialogTitle className="af-dialog-title">
              Explore Attention Factory
            </DialogTitle>
            <DialogDescription className="sr-only">
              Pages, learning programs, and ways to work with us.
            </DialogDescription>
            <DialogClose asChild>
              <Button
                className="af-close"
                size="icon"
                variant="ghost"
                aria-label="Close navigation"
              >
                <X />
              </Button>
            </DialogClose>
            <nav aria-label="Mobile navigation">
              {[...mainLinks, ...serviceLinks, ...hqLinks].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ContactDialog className="af-button" />
          </DialogContent>
        </Dialog>
      </PageContainer>
    </header>
  );
}
