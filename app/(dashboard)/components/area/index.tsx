'use client';

import clsx from "clsx";
import React from "react";


interface AreaWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const AreaWrapper: React.FC<AreaWrapperProps> = ({ className, ...props }) => {
    return (
        <div className={clsx("flex flex-col gap-4 items-start", className)} {...props}>
            {props.children}
        </div>
    );
}

interface AreaHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    icon?: React.ReactNode;
}

export const AreaHeader: React.FC<AreaHeaderProps> = ({ title, subtitle, icon, ...props }) => {
    return (
        <div className="flex flex-row items-center gap-4 justify-center w-full" {...props}>
            {icon}
            <div className="w-full justify-start flex flex-col">
                <h1 className="text-lg font-semibold text-foreground-900">{title}</h1>
                <p className="text-xs text-default-500">{subtitle}</p>
            </div>
        </div>
    );
}

interface AreaMainProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const AreaMain: React.FC<AreaMainProps> = ({ ...props }) => {
    return (
        <div
            {...props}
            className={clsx(
                "w-full",
                props.className
            )}
        >
            {props.children}
        </div>
    );
}

interface AreaProps extends React.HTMLAttributes<HTMLDivElement> {
    labelPlacement?: "outside" | "inside";
    showLabel?: boolean;
    classNames?: {
        wrapper?: AreaWrapperProps["className"];
        header?: AreaHeaderProps["className"];
        main?: AreaMainProps["className"];
    };
}

export const AreaContext = React.createContext<AreaProps>({ labelPlacement: "inside", showLabel: true });
export const useArea = () => React.useContext(AreaContext);

export const Area: React.FC<AreaProps> = ({ labelPlacement = "inside", showLabel = true, ...props }) => {
    return (
        <AreaContext.Provider value={{ labelPlacement, showLabel }}>
            <AreaWrapper className={props.classNames?.wrapper}>
                {props.children}
            </AreaWrapper>
        </AreaContext.Provider>
    );
}