"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Moon01Icon, Sun01Icon } from "hugeicons-react";
import dynamic from "next/dynamic";
import { Button, ButtonProps } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";


export interface ThemeSwitchProps extends ButtonProps {
  classNames?: {
    wrapper?: string;
    header?: string;
    main?: string;
    avatar?: string;
    title?: string;
  };
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <Button
      className={
        twMerge(
          "bg-foreground-100 text-foreground-900 lg:shadow-sm",
          className
        )
      }
      size="sm"
      isIconOnly
      onClick={onChange}
      {...classNames}
    >
      {theme === "light" ? (
        <Sun01Icon size={20} />
      ) : (
        <Moon01Icon size={20} />
      )}
    </Button>
  );
};

export default dynamic(() => Promise.resolve(ThemeSwitch), {
  ssr: false,
});