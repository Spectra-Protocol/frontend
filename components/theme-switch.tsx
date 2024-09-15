"use client";

import { FC } from "react";
import { SwitchProps, useSwitch, Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Moon01Icon, Sun01Icon } from "hugeicons-react";


export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Switch
      defaultChecked={theme === "dark"}
      isSelected={theme === "dark"}
      color="primary"
      thumbIcon={theme === "dark" ? <Moon01Icon size={20} /> : <Sun01Icon size={20} />}
      onChange={onChange}
      >
        <p></p>
      </Switch>
  );
};
