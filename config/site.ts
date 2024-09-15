export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Unexpexted | Decentralized Data",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Docs",
      href: "/docs",
    },

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  dashboard: {
    navItems: [
      {
        label: "Interface",
        href: "/dashboard/interface",
      },
      {
        label: "Notifications",
        href: "/dashboard/notifications",
      }
    ],
  },
};
