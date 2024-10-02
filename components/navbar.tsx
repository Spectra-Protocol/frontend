import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import dynamic from "next/dynamic";

import { siteConfig } from "@/config/site";
import ThemeSwitch from "@/components/theme-switch";
import {
  Logo,
} from "@/components/icons";

const GetStartedButton = dynamic(() => import('./GetStartedButton'), { ssr: false });

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-background/5">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-4" href="/">
            <Logo />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

    </NextUINavbar>
  );
};
